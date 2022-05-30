import Vue from "vue";
import Page from "~/components/Page.vue";
import TwoColImageLeft from "~/components/blocks/TwoColImageLeft.vue";
import CallOut from "~/components/blocks/CallOut.vue";
import NewsCard from "~/components/atoms/NewsCard";
import NewsUpdates from "~/components/blocks/NewsUpdates";

Vue.component("page", Page);
Vue.component("TwoColImageLeft", TwoColImageLeft);
Vue.component("CallOut", CallOut);
Vue.component("NewsCard", NewsCard);
Vue.component("NewsUpdates", NewsUpdates);
