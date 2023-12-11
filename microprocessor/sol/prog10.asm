.model small
.code

MOV AX, 9999H
MOV BX, 1234H
ADD AX, BX
DAA ; Adjust for BCD addition

MOV DX, 3099H
MOV BX, 1234H

end
