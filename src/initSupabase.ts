import "react-native-url-polyfill/auto";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createClient } from "@supabase/supabase-js";

// Better put your these secret keys in .env file
export const supabase = createClient(
  "https://gkxxcfmtunmphvgaqvns.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdreHhjZm10dW5tcGh2Z2Fxdm5zIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Njc3NTQ1NzIsImV4cCI6MTk4MzMzMDU3Mn0.QSCN9-HHaoWNRA8vnQ5GvH2oBGaJxWAU4r9AxeAnf64",
  {
    auth: {
      storage: AsyncStorage,
      autoRefreshToken: true,
      persistSession: true,
      detectSessionInUrl: false,
    },
  }
);
