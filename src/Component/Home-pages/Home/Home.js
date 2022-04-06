import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Menubar from '../../Shared/Menubar/Menubar';
import Banner from '../Banner/Banner';
import HistoryBanner from '../History-section/History-Banner/HistoryBanner';
import History from '../History-section/History/History';
import ParticularSection from '../History-section/Particular Section/ParticularSection';
import SeasonalMenus from '../History-section/Seasonal Menus/SeasonalMenus';
import StunningThings from '../History-section/Stunning Things/StunningThings';
import TeamMember from '../History-section/TeamMember/TeamMember';

const Home = () => {
    return (
        <div>
            <Menubar></Menubar>
            <Banner></Banner>
            <History></History>
            <HistoryBanner></HistoryBanner>
            <StunningThings></StunningThings>
            <ParticularSection></ParticularSection>
            <SeasonalMenus></SeasonalMenus>
            <TeamMember></TeamMember>
            <Footer></Footer>
        </div>
    );
};

export default Home;