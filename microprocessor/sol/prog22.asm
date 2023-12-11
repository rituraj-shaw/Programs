.model small
.data
    DATA1 DB 41H, 42H, 43H, 44H, 45H
    TARGET_VALUE DB 44H ; Target value to search for
.code
.startup

    ; Linear search implementation
    MOV BX, OFFSET DATA1 ; Initialize BX to the address of the array
    MOV AL, TARGET_VALUE ; Initialize AL with the target value to search for
    CALL linear_search

    ; Exit the program
    MOV AH, 4CH ; DOS function: Exit program
    INT 21H ; DOS interrupt

linear_search:
    MOV CX, 5 ; Set CX to the number of elements in the array

search_loop:
    CMP [BX], AL ; Compare the current element with the target value
    JE found ; Jump to found if a match is found

    INC BX ; Move to the next element in the array
    LOOP search_loop ; Continue the loop until CX becomes zero

    ; If we reach here, the target value is not found
    JMP not_found ; Jump to not_found

found:
    ; The target value is found
    ; BX now contains the index of the target value
    ; You can perform further actions here, such as printing the index

    ; For simplicity, let's print the index to stdout
    MOV AH, 2 ; DOS function: Print character
    ADD BX, '0' ; Convert index to ASCII
    INT 21H ; DOS interrupt

    ; Add a newline character for better readability
    MOV DL, 0DH ; Carriage return
    INT 21H ; DOS interrupt
    MOV DL, 0AH ; Line feed
    INT 21H ; DOS interrupt

    JMP exit_program ; Jump to exit_program

not_found:
    ; The target value is not found in the array
    ; You can perform further actions here

exit_program:
    RET

end
