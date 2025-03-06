#Bar#

import pandas as pd 
import numpy as np 
import matplotlib.pyplot as plt 


medalsData = pd.read_csv("medals.csv") 
print(medalsData) 

plt.figure(figsize=(10, 6)) 

plt.bar(medalsData["country"], medalsData["Gold"], label="Gold", 
color="#FFD700") 
plt.bar(
    medalsData["country"], 
    medalsData["Silver"], 
    bottom=medalsData["Gold"], 
    label="Silver", 
    color="#808080", 
) 
plt.bar(
    medalsData["country"], 
    medalsData["Bronze"], 
    bottom=medalsData["Gold"] + medalsData["Silver"], 
    label="Bronze", 
    color="#CD7F32", 
) 

plt.xticks(np.arange(len(medalsData["country"])), medalsData["country"], 
rotation='vertical') 
plt.title("Tokyo 2020 Olympics Medals") 
plt.xlabel("country") 
plt.ylabel("Medals Won") 
plt.legend(title="Medal Type") 
plt.show()

<br/>
<hr/>
Joint Plot and dataset information. 
from seaborn import load_dataset 
import seaborn as sns 
iris = load_dataset('iris')  #The Iris dataset contains measurements of sepal length,  
#sepal width, petal length, and petal width for three species of flowers: setosa, versicolor, and 
virginica. 
# Display the first few rows of the dataset 
print(iris.head()) 
# Summary statistics 
print(iris.describe()) 
# Column names and data types 
print(iris.info()) 
sns.jointplot(x='sepal_length', y='sepal_width', data=iris, kind='scatter', hue='species', 
palette='Set1') 
<br/>
<hr/>

normalization
from sklearn.preprocessing import MinMaxScaler 
import pandas as pd 
# Sample dataset 
data = {'Age': [20, 30, 40, 50, 60], 'Salary': [20000, 50000, 80000, 110000, 140000]} 
df = pd.DataFrame(data) 
# Apply Min-Max Scaling 
scaler = MinMaxScaler() 
df_scaled = pd.DataFrame(scaler.fit_transform(df), columns=df.columns)  
print("Min-Max Scaled Data:\n", df_scaled) 
from sklearn.preprocessing import StandardScaler 
scaler = StandardScaler() 
df_standardized = pd.DataFrame(scaler.fit_transform(df), columns=df.columns) 
print("Standardized Data:\n", df_standardized)

<br/>
<hr/>
import pandas as pd 
import numpy as np 
import matplotlib.pyplot as plt 
import seaborn as sns 
# Sample data 
df = pd.DataFrame({'Age': [15, 22, 25, 30, 35, 40, 50, 60, 70, 80]}) 
# Equal-Width Binning 
df['Equal-Width Binning'] = pd.cut(df['Age'], bins=3, labels=['Young', 'Middle-Aged', 'Old']) 
print(df) 
# Equal-Frequency Binning 
df['Equal-Frequency Binning'] = pd.qcut(df['Age'], q=3, labels=['Low', 'Medium', 'High']) 
print(df) 
# Custom Binning 
bins = [0, 18, 35, 50, 100] 
labels = ["Teen", "Young Adult", "Adult", "Senior"] 
df['Custom Binning'] = pd.cut(df['Age'], bins=bins, labels=labels) 
print(df) 
# Plotting 
f
 ig, axes = plt.subplots(1, 3, figsize=(18, 5)) 
# Equal-Width Binning Bar Chart 
sns.countplot(x=df["Equal-Width Binning"], palette="Blues", ax=axes[0]) 
axes[0].set_title("Equal-Width Binning") 
# Equal-Frequency Binning Bar Chart 
sns.countplot(x=df["Equal-Frequency Binning"], palette="Greens", ax=axes[1]) 
axes[1].set_title("Equal-Frequency Binning") 
# Custom Binning Bar Chart 
sns.countplot(x=df["Custom Binning"], palette="Oranges", ax=axes[2]) 
axes[2].set_title("Custom Binning") 
# Show plot 
plt.tight_layout()   #Matplotlib that automatically adjusts the spacing between subplots to 
#prevent overlapping. 
plt.show() 

<br/>
<hr/>

##pie chart import
import matplotlib.pyplot as plt
import pandas as pd


df = pd.read_csv('student_enrollment.csv')
print(df)

df.columns = df.columns.str.strip()

Course = df["Course"]
Enrollment = df["Enrollment"]

plt.figure(figsize=(8,8))
plt.pie(Enrollment, labels=Course, autopct="%1.1f%%")
plt.title("student enrollment")
plt.legend(title="course", loc = "upper right")
plt.show()

<br/>
<hr/>


##GOLDBAR
import matplotlib.pyplot as plt
import pandas as pd
import numpy as np

df = pd.read_csv('olympics_medals.csv')
print(df)

plt.figure(figsize=(10,10))

plt.bar(df["country"], df["Gold"], label="Gold", color='red')
plt.bar(df["country"], df["Silver"],bottom=df["Gold"], label="Silver", color='blue')
plt.bar(df["country"], df["Bronze"], bottom=df["Gold"]+df["Silver"], label="bronze", color='pink')

plt.xticks()


plt.title("here we go")
plt.xlabel("dev")
plt.ylabel("gajjar")
plt.legend()
plt.show()

<br/>
<hr/>
