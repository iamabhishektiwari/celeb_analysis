import pandas as pd 
import numpy as np
import math


df = pd.read_csv('dataframe.csv',index_col = 0)


#df_res = df_res.append(df_res)





def get_names():
	names = df.index.values
	return names

names = get_names()

l_l = [3.5]*26 +[1.5,5,2.5]
l_list = pd.Series(l_l)
def calc():
	dummy_data = pd.Series({'person - 1':'Abhishek',
						'person - 2':'Alia',
						'match-percentage':100})


	df_res = pd.DataFrame([dummy_data]);
	l = len(names)
	for i in range(0,l):
		for j in range(i+1,l):
			ch = abs(df.loc[names[i]]-df.loc[names[j]])
			for k in range(0,len(ch)):
				if(ch[k]<.05):
					ch[k] = l_list[k];
				elif(ch[k]>1.05):
					ch[k]=0
				else:
					ch[k] = (100 - ((ch[k]-.05)*100))
					ch[k] = (ch[k]*l_list[k]/100)
				ch[k] = math.ceil(ch[k]);
			fres = ch.sum();
			d_data = pd.Series({'person - 1':names[i],
								'person - 2':names[j],
								'match-percentage':fres})
			df_r = pd.DataFrame([d_data]);
			df_res = df_res.append(df_r)



	df_res.to_csv('results.csv')
	print("Success")


			

calc()











#print(df.head())

# arr = df.index.values
# print(arr)

#df.set_index(name')

#print(df.loc['Salman Khan'] - df.loc['Alia Bhatt'])