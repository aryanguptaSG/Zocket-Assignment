import { useState } from "react";
import './App.css';
import SideNavbar from './components/SideNavbar';
import TopNavbar from './components/TopNavbar';
import AllCampaign from './components/AllCampaign';
import CreateNewCampaign from "./components/CreateNewCampaign";


function App() {
  const [isNewCampaignVisible, setisNewCampaignVisible] = useState(false);
  const setCreateNewCampaignVisible = () => {
    setisNewCampaignVisible(true);
  }
  const hideCreateNewCampaign = () => {
    setisNewCampaignVisible(false);
  }
  return (
    <div className="bg-document min-h-screen flex justify-center">
      <div className='w-[82px] min-h-full'>
        <SideNavbar hideCreateNewCampaign={hideCreateNewCampaign} />
      </div>
      <div className='w-full min-h-full'>
        <TopNavbar />
        {!isNewCampaignVisible ?
          <AllCampaign
            setisNewCampaignVisible={setCreateNewCampaignVisible}
          />
          :
          <CreateNewCampaign hideCreateNewCampaign={hideCreateNewCampaign} />
        }
      </div>
    </div>
  );
}

export default App;
