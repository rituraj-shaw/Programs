.model small
.code

MOV AX, 12345678H ; BCD operand 1
MOV BX, 56781234H ; BCD operand 2

SUB AX, BX ; Subtract operand 2 from operand 1
DAS ; Adjust for BCD subtraction

MOV DX, AX ; Move the result to DX for display

; Display the result (assuming a simple DOS program)
MOV AH, 02h ; DOS function: Display character
INT 21h ; DOS interrupt

MOV AX, 4C00H ; DOS function: Exit program
INT 21H ; DOS interrupt

end
