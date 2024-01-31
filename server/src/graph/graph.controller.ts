import { Controller, Get } from '@nestjs/common';
// Import Supabase client
import { createClient } from '@supabase/supabase-js';

// Set up Supabase client

@Controller('graph')
export class GraphController {
  @Get()
  async getData() {
    // Example: Fetch all records from 'your_table'
    const supabase = createClient('https://joiajrrpuiugkcctqucg.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpvaWFqcnJwdWl1Z2tjY3RxdWNnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDY2OTUxMTQsImV4cCI6MjAyMjI3MTExNH0.DhveZZdoNKizZBqf-ScIhdYiwmN5RIczUKlVOgC1tSM');
    const { data, error } = await supabase
    .from('Profits')
    .select('*');


    if (error) {
    console.error('Error fetching data:', error.message);
    } else {
    // console.log('Fetched data:', data);
    // const filteredData = data.filter(entry => entry.id % 1000 === 0);
    let filteredProfitPercentage =[];
    let filteredTimestamps=[];
    let j=0;
    let sum =0;
    let amt =0;
    for(let i=1;i<data.length;i++){
        sum+=data[i]["Profit Percentage"];
        amt++;
        if(i%250==0 && i%500!=0){
          filteredProfitPercentage[j]=sum/amt;
          filteredTimestamps[j]=data[i-250]["Timestamp"];
          amt=0;
          sum =0;
          j++;
        }
        else if(i==data.length-1){
          filteredProfitPercentage[j]=sum/amt;
          
          filteredTimestamps[j]=data[i]["Timestamp"];
        }
        
        
    }

    return {filteredProfitPercentage ,filteredTimestamps};
    }

  }
}