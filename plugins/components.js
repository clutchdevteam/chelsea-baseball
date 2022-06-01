import Vue from "vue";
import Page from "~/components/Page.vue";
import Interior from "~/components/Interior.vue";
import TwoColImageLeft from "~/components/blocks/TwoColImageLeft.vue";
import CallOut from "~/components/blocks/CallOut.vue";
import NewsCard from "~/components/atoms/NewsCard";
import NewsUpdates from "~/components/blocks/NewsUpdates";
import Highlight from "~/components/blocks/Highlight.vue";
import HomepageHero from "~/components/blocks/HomepageHero.vue";
import InteriorTitle from "~/components/blocks/InteriorTitle.vue";
import PdfEntry from "~/components/blocks/PdfEntry.vue";
import Richtext from "~/components/blocks/Richtext.vue";
import PlayerCard from "~/components/atoms/PlayerCard";
import RosterGrid from "~/components/blocks/RosterGrid";

Vue.component("page", Page);
Vue.component("Interior", Interior);
Vue.component("TwoColImageLeft", TwoColImageLeft);
Vue.component("CallOut", CallOut);
Vue.component("NewsCard", NewsCard);
Vue.component("NewsUpdates", NewsUpdates);
Vue.component("Highlight", Highlight);
Vue.component("HomepageHero", HomepageHero);
Vue.component("InteriorTitle", InteriorTitle);
Vue.component("PdfEntry", PdfEntry);
Vue.component("Richtext", Richtext);
Vue.component("PlayerCard", PlayerCard);
Vue.component("RosterGrid", RosterGrid);
