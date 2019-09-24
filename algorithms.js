const BinarySearch=(list_array,item)=>{
     if(list_array.length <2) return list;
     const list = list_array.sort((a,b)=>a-b);
     let start_index =0;
     let last_index=list.length-1;
     while(start_index <=last_index){
        let mid_index = Math.floor((start_index+last_index)/2);
         if(list[mid_index]<item){
             start_index=mid_index+1;
         }else if(list[mid_index]>item){
             last_index=mid_index-1;
         }else{
             return `${item} found at position ${mid_index+1}`;
         }
     }
     return `${item} not found`;
 };
 
const QuickSort=list=>{
     if(list.length <2) return list;
     let pivot = list.shift();
     let less = list.filter(item=>item<=pivot);
     let greater = list.filter(item=>item>=pivot);
     return [...QuickSort(less),pivot,...QuickSort(greater)];
 };
 
const MergeSort=list=>{
     if(list.length<2) return list;
     let mid_index = Math.floor(list.length/2);
     let left_array = list.slice(0,mid_index);
     let right_array = list.slice(mid_index,list.length);
     const merge=(left,right)=>{
        const sorted =[];
        let left_length = left.length;
        let right_length = right.length;
        while(left_length||right_length){
            if(left_length&&right_length){
                if(left[0]<right[0]){
                    sorted.push(left.shift());
                }else{
                    sorted.push(right.shift());
                }
                
            }else if(left_length){
                sorted.push(left.shift());
            }else{
                sorted.push(right.shift());
            }
        }
        return sorted;
    }
     return merge(MergeSort(left_array),MergeSort(right_array));
 }
