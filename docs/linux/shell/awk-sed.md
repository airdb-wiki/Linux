# awk & sed

## awk 

```bash
awk '{sum[$2]+=1} END {for(k in sum) printf("%s %s %d %s\n", $1, k, sum[k], $NF)}' | sort -n -r -k 3

awk -F '|' '{sum += $1} END {print sum}'

awk '{sum[$2]+=1} END {for(k in sum) printf("%s %s %d %s\n", $1, k, sum[k], $NF)}' | sort -n -r -k 3

# 求总和
awk -F '|' '{sum += $1} END {print "Sum =", sum}'

# 求平均
cat data|awk '{sum+=$1} END {print "Average = ", sum/NR}'

# 求最大值
cat data|awk 'BEGIN {max = 0} {if ($1>max) max=$1 fi} END {print "Max=", max}'

# 求最小值
awk 'BEGIN {min = 1999999} {if ($1<min) min=$1 fi} END {print "Min=", min}'
```