.model small
.code
.startup
mov AL,0AH
.if AL>09H
ADD AL,37H
MOV CX,08H
L1:
SHL AL,01H
MOV AL,0H
ADC AL,0H
LOOP L1
.endif 
.exit
end