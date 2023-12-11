.model small
.code

MOV AX, 12345678H ; BCD operand 1
MOV BX, 56781234H ; BCD operand 2

ADD AX, BX ; Add operand 2 to operand 1
DAA ; Adjust for BCD addition

MOV DX, AX ; Move the result to DX for display

; Display the result (assuming a simple DOS program)
MOV AH, 02h ; DOS function: Display character
INT 21h ; DOS interrupt

MOV AX, 4C00H ; DOS function: Exit program
INT 21H ; DOS interrupt

end
