.model small
.data
    binary_number dw 1010b
    ascii_buffer db 6 dup(?)
.code
.startup
    MOV AX, binary_number
    CALL binary_to_ascii
    MOV AH, 09h
    MOV DX, OFFSET ascii_buffer
    INT 21h
    MOV AH, 4Ch
    INT 21h

binary_to_ascii PROC
    MOV CX, 16
    MOV SI, OFFSET ascii_buffer + 4

convert_loop:
    SHR AX, 1
    ADC BYTE PTR [SI], '0'
    DEC SI
    LOOP convert_loop

    RET
binary_to_ascii ENDP

end
