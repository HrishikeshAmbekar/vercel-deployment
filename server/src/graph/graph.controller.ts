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
    const filteredData = data.filter(entry => entry.id % 1000 === 0);

    return filteredData;
    }

  }
}