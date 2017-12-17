#include <bits/stdc++.h>
using namespace std;

int main()
{
	int n, f_count=0,prev_count=0;
	cin>>n;
	int arr[n];

	for(int i=0;i<n;i++)
	{
		cin>>arr[i];

		if(arr[i]==1)
		{
			prev_count++;
		}
		else if(arr[i]==0)
		{
			if(prev_count>f_count)
			{
				f_count=prev_count;
				prev_count = 0;
			}
		}
	}

	cout<<f_count;
	return 0;

}