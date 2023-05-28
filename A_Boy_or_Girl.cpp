#include<bits/stdc++.h>
using namespace std;
#define ll long long
int main()
{
    string s;
    cin>>s;
    int dp[26];
    memset(dp,-1,sizeof(dp));
    for(int i=0;i<s.length();i++)
    {
        dp[s[i]-'a']++;
    }
    int cnt=0;
    for(int i=0;i<26;i++)
    {
        if(dp[i]!=-1)
            cnt++;
    }
    if(cnt%2)
        cout<<"IGNORE HIM"<<endl;
    else
        cout<<"CHAT WITH HER!"<<endl;
}