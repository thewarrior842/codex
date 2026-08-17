using System;
class BinaryS
{
    public static int Bi(int[] arr,int target)
    {
        int n = arr.Length;
        int st = 0;
        int end = n - 1;
        while (st <= end)
        {
            int mid = st + (end - st) / 2;
            if (arr[mid] == target)
            {
                return mid;
            }
            if (arr[mid] > target)
            {
                end = mid - 1;
            }
            else
            {
                st = mid + 1;
            }
        }
        return -1;
    }
    static void Main(string[] args)
    {
        int[] arr = { 1, 2, 3, 4, 5, 6, 7 };
        int target = 5;
        int Search = Bi(arr, target);
        Console.WriteLine(Search);
    }
}
