import { ThemeProvider } from '@/components/ui/theme-provider'
import { ModeToggle } from '@/components/ui/mode-toggle'
export const LandingPage = () => {
  return (
<>
  <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div id='root'>
      



      <ModeToggle/>

 
      </div>
    </ThemeProvider>   
   </>
  )
}

export default LandingPage;