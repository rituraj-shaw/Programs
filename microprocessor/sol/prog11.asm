.model small
.code

MOV AX, 9999H
MOV BX, 1234H
SUB AX, BX
DAS ; Adjust for BCD subtraction

MOV DX, 3099H
MOV BX, 1234H

end
