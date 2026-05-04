import { Component } from '@angular/core';
import Header from '../../components/header/header';
import NavBar from '../../components/nav-bar/nav-bar';
import ProfileSettings from '../../components/profile-settings/profile-settings';
import Banner from '../../components/banner/banner';
import AccumulatedPoints from '../../components/accumulated-points/accumulated-points';
import RankingPreview from '../../components/ranking-preview/ranking-preview';
import UpcomingMatches from '../../components/upcoming-matches/upcoming-matches';
import Predictions from '../../components/predictions/predictions';
import MatchesCountdown from '../../components/matches-countdown/matches-countdown';
import RankingPosition from '../../components/ranking-position/ranking-position';
import LeagueCta from '../../components/league-cta/league-cta';
import NewsTips from '../../components/news-tips/news-tips';
import { ModalView } from '../../components/modal-view/modal-view';

@Component({
  selector: 'app-dashboard',
  imports: [
    Header,
    NavBar,
    ProfileSettings,
    Banner,
    AccumulatedPoints,
    RankingPreview,
    UpcomingMatches,
    Predictions,
    MatchesCountdown,
    RankingPosition,
    LeagueCta,
    NewsTips,
    ModalView
  ],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export default class Dashboard {}
