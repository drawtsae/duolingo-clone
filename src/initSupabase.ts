import "react-native-url-polyfill/auto";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createClient } from "@supabase/supabase-js";

// Better put your these secret keys in .env file
export const supabase = createClient(
  "https://xzflfhtscparrsbvtbkq.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh6ZmxmaHRzY3BhcnJzYnZ0YmtxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Njc5MTUwMjQsImV4cCI6MTk4MzQ5MTAyNH0.zWRIUgvYMqxMlkOrleWTAJiLSQn-wm049JRIxyq-qSo",
  {
    auth: {
      storage: AsyncStorage,
      autoRefreshToken: true,
      persistSession: true,
      detectSessionInUrl: false,
    },
  }
);
