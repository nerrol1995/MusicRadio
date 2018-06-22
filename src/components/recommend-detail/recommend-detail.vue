<template>
    <transition name="slide">
        <music-list :songs="songs" :title="title" :bg-image="bgImage"></music-list>
    </transition>
</template>
<script>
import { mapGetters } from "vuex";
import { getRecommendMusicDetail } from "api/recommend";
import { ERR_OK } from "api/config";
import MusicList from "components/music-list/music-list";
export default {
  data() {
    return {
      songs: []
    };
  },
  computed: {
    ...mapGetters(["recommend"]),
    title(){
        return this.recommend.name
    },
    bgImage(){
        return this.recommend.picUrl
    }
  },
  created() {
    // console.log(this.recommend);
    this._getDetail();
  },
  methods: {
    _getDetail() {
      if (!this.recommend.id) {
        this.$router.push("/recommend");
        return;
      }
      getRecommendMusicDetail(this.recommend.id).then(res => {
        if (res.status === ERR_OK) {
          console.log(res.data.result);
          this.songs = res.data.result.tracks;
        }
      });
    }
  },
  components: {
    MusicList
  }
};
</script>
<style lang="stylus" scoped>
.slide-enter-active, .slide-leave-active {
    transition: all 0.3s;
}
.slide-enter, .slide-leave-to {
    transform: translate3d(100%, 0, 0);
}
</style>
