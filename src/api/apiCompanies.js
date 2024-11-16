import supabaseClient from "@/utils/supabase";

export const getCompanies = async (token) => {
  const supabase = await supabaseClient(token);
  const { data, error } = await supabase.from("companies").select("*");
  if (error) {
    console.error("Error fetching Companies", error);
    return null;
  }
  return data;
};

