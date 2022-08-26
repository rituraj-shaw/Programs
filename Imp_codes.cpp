#include<iostream>
#include<cmath>

using namespace std;


//any to decimal

//decimal to any

//decimal to binary using recursion
void binaryOf(int number){
    if (number==0)
        return;
    binaryOf(number>>1);
    cout<<(number&1);
}
//number of digits in binary form of a given number
int countBinaryDigits(int number){
    return log2(number)+1;
}

//Find ith bit 
int findBit(int number,int index){
    return (number&(1<<(index-1)))?1:0;
}

//set ith bit (if 0 set 1 if 1 set 1)
void setBit(int number,int index){
    binaryOf((number|(1<<(index-1))));
}

// reset ith bit(if 1 set 0 if 0 set 0)
void resetBit(int number,int index){
    binaryOf((number&(~(1<<(index-1)))));
}

//raise 2 to given power 
int twoRaisedToPower(int power){
    return (1<<power);
}

//check wether number is of 2 raised to some power
string isPowerOf2(int number){
    while(number%2==0) number/=2;
    return (number==1)?"Yes":"No";
}

//check number is even or odd
string evenOdd(int number){
    return (number&1)?"Odd":"Even";
}

//counts number of digits in given number
int countDigits(int number){
    return (int)(log10(number)+1);
}

/*find unique element in array if all other are repeating twice e.g. array[]={2,3,2,4,4,3,12} unique=2
note write array size manually to run function*/
// int uniqueIn(int (&array)[array_size]){
//     int unique=0;
//     for (int x:array) unique^=x;
//     return unique;
// }

void lcm(){
    int a,b,max=0;
    cout<<"Enter two no. "<<endl;
    cin>>a>>b;
    max=a>b?a:b;
    do
    {
        if (max%a==0 && max%b==0){
            cout<<"LCM is "<<max;
            break;
        }
        else 
            max++;
    } while (true);
    
}

void hcf(){
    int a,b,hcf=0;
    cout<<"Enter two no. "<<endl;
    cin>>a>>b;
    if(b>a){
        int swap=b;
        b=a;
        a=swap;
    }
    for (int i = 1;i<=b;++i){
        if (a%i==0 && b%i==0)
            hcf=i;
    }
    cout<<"HCF is "<<hcf;
}

int main(){
    int array[]={[0...4]=5};
    cout<<array[3];
    return 0;
}
