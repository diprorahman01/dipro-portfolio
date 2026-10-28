export type Project = {
 slug:string; title:string; eyebrow:string; image:string; description:string; longDescription:string;
 stack:string[]; features:string[]; challenges:string[]; improvements:string[]; live:string; github:string;
};
export const projects:Project[] = [
 {
  slug:"bazar-dor", title:"BazarDor", eyebrow:"Full-stack · Grocery Price Tracker", image:"/images/bazar-dor.png",
  description:"A Bengali-language grocery price tracker that helps people explore, sort and monitor everyday market prices in Bangladesh.",
  longDescription:"BazarDor (বাজার দর) is a responsive grocery price tracking application designed for everyday shoppers in Bangladesh. It presents grocery items in Bengali, groups products by category, displays price changes and provides secure account access.",
  stack:["Next.js","React","TypeScript","Tailwind CSS","DaisyUI","MongoDB Atlas","Better Auth","OAuth","REST API"],
  features:["Browse grocery products across multiple categories","View market prices and price changes in Bangladeshi Taka","Sort products from lower to higher price and vice versa","Sign in using email, Google or GitHub","View and update user account details"],
  challenges:["Correctly sorting prices that may contain Bengali numerals","Connecting OAuth authentication with persistent account storage","Keeping category data and asynchronous loading states easy to understand","Creating mobile-friendly layouts for Bengali content"],
  improvements:["Add charts showing historical price changes","Introduce personal watchlists and price-drop notifications","Compare prices across local markets","Improve search and filtering for larger product catalogs"],
  live:"https://bazar-dor-five-phi.vercel.app/", github:"https://github.com/diprorahman01/bazar-dor"
 },
 {
  slug:"fitlog", title:"FitLog", eyebrow:"Frontend · Workout Planner", image:"/images/fitlog.png",
  description:"A workout companion for browsing exercises, building daily plans, saving favorites and tracking workout completion.",
  longDescription:"FitLog is a responsive workout tracking application with a searchable exercise library, workout details, daily planning and locally saved preferences. Users can build a plan, mark activities complete and track basic statistics.",
  stack:["Next.js","React","TypeScript","Tailwind CSS","React Context API","REST API","Local Storage"],
  features:["Browse an API-powered library of exercises","Search and sort workouts by different criteria","Add workouts to a daily plan","Save exercises for later and mark workouts as complete","Keep plans and saved exercises after refreshing"],
  challenges:["Coordinating state across the workout library, plan and saved lists","Keeping stored plan data in sync with user actions","Updating completion statistics as plans change","Designing consistent cards across screen sizes"],
  improvements:["Add accounts and sync plans across devices","Visualize weekly and monthly progress","Support custom workout routines","Add reminders and exercise history"],
  live:"https://fitlog-kappa-roan.vercel.app/", github:"https://github.com/diprorahman01/fitlog"
 },
 {
  slug:"devstack", title:"DevStack", eyebrow:"React · Interactive Stack Builder", image:"/images/devstack.png",
  description:"Explore development technologies and assemble a personal technology stack through a clean interactive interface.",
  longDescription:"DevStack is a responsive React application that helps developers explore frontend, backend, database and tooling options. Visitors can learn about technologies and manage a personalized selection as they consider a stack for their next project.",
  stack:["React","JavaScript (ES6)","JSX","CSS3","Vite","JSON","React Icons","React Toastify"],
  features:["Explore technologies with categories and descriptions","Choose technologies for a personalized stack","Remove individual technologies or clear the stack","Receive feedback through toast notifications","Use the interface on desktop and mobile"],
  challenges:["Managing interactive selection using React state","Avoiding duplicate technologies in the selected stack","Rendering reusable cards from structured data","Adapting navigation and cards to smaller screens"],
  improvements:["Save and share stack selections","Add advanced filtering and search","Compare technologies side by side","Support personalized accounts and saved preferences"],
  live:"https://playful-vacherin-6d4004.netlify.app/", github:"https://github.com/diprorahman01/DevStack"
 }
];
