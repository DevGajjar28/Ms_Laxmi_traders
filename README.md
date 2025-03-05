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
