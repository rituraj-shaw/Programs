import java.util.*;

public class Imp_codes{

    public static void main(String[] args) {
//       int max=Integer.MIN_VALUE,min=Integer.MAX_VALUE;
    }

    //nth magic number code write here
    public static void magicNumber(int n){

            while(n>0){

            }
    }

    //find ith bit in a number
    public static int findBit(int num,int index){
        int a=1<<(index-1);
        if ((num&(1<<(index-1)))==a) return 1;
        return 0;
    }

    //floor of a number in given array
    public static int floor(int[] array,int target){
        if (target<array[0]){
            return -1;
        }
        int start = 0, end = array.length - 1;
        while(start<=end){
            int mid=start+(end-start)/2;
            if(array[mid]==target){
                return mid;
            }
            else if(array[mid]>target){
                end=mid-1;
            }
            else{
                start=mid+1;
            }
        }
        return array[end];
    }

    //ceiling of a number in given array
    public static int ceiling(int[] array,int target) {
        if (target>array[array.length-1]){
            return -1;
        }
        int start = 0, end = array.length - 1;
            while(start<=end){
                int mid=start+(end-start)/2;
                if(array[mid]==target){
                    return mid;
                }
                else if(array[mid]>target){
                    end=mid-1;
                }
                else{
                    start=mid+1;
                }

        }
        return array[start];
    }

    //order agnostic binary search(takes both ascending or decending sorted array)
    public static int orderAgnosticBinarySearch(int[] array,int target){
        int start=0,end=array.length-1;
        while(start<=end){
            int mid=start+(end-start)/2;
            if(array[mid]==target){
                return mid;
            }
            if(array[0]<array[array.length-1]){
                if(array[mid]>target){
                    end=mid-1;
                }
                else{
                    start=mid+1;
                }
            }
            else{
                if(array[mid]<target){
                    end=mid-1;
                }
                else{
                    start=mid+1;
                }
            }
        }
        return -1;
    }


    public static int binarySearchAscending(int[] array,int target){
        int start=0,end=array.length-1;
        while(start<=end){
            int mid=start+(end-start)/2;
            if(array[mid]==target){
                return mid;
            }
            else if(array[mid]>target){
                end=mid-1;
            }
            else{
                start=mid+1;
            }
        }
        return -1;
    }


    public static void stringToArray(){
        Scanner in = new Scanner(System.in);
        System.out.println("Enter string ");
        String str=in.nextLine();
        System.out.println(Arrays.toString(new String[]{str}));
        System.out.println(Arrays.toString(str.toCharArray()));
    }

//serial wise counting using recursion i.e. 1 2 3 4 5 ... n
    static void counting(int n){
        if (n==0) return;
        counting(n-1);
        System.out.println(n);
    }

//odd counting using proper space
    public static void oddCounting(int n){
        int j=1;
        for (int i = 1; i<=n;){
            System.out.print(i+" ");
            if(j%30==0){
                System.out.println();
            }
            j++;
            i+=2;
        }
    }

    static pair getMinMax(long a[], long n)
    {
        long maximum=Integer.MIN_VALUE,minimum=Integer.MAX_VALUE;
        for(long i:a){
            maximum=Math.max(maximum,i);
            minimum=Math.min(minimum,i);
        }
        return new pair(minimum,maximum);
    }


//    without initialisation if i is initialised before    for(;i<=5;i++) System.out.print(i+" ");



class pair
{
    long first, second;
    public pair(long first, long second)
    {
        this.first = first;
        this.second = second;
    }
}