<template>
    <div class="recommend" ref="recommend"> 
        <Scroll class="recommend-content" :data="recommendMusicList" ref="scroll">
            <div>
               <div class="slider-wrapper" v-if="recommends.length" ref="sliderWrapper">
                    <Slider>
                        <div v-for="item in recommends" :key="item.id">
                           <a :href="item.url">
                               <img @load="loadImg" :src="item.picUrl">
                           </a>
                        </div>
                    </Slider>
               </div>
                <div class="recommend-list">
                    <h1 class="list-title">热门歌单推荐</h1>
                    <ul>
                        <li class="item" v-for="item in recommendMusicList" :key="item.id" @click="selectItem(item)">
                          <div class="icon">
                            <img width="60" height="60" :src="item.picUrl">
                          </div>
                          <div class="text">
                            <h2 class="name">{{item.copywriter}}</h2>
                            <p class="desc">{{item.name}}</p>
                          </div>
                        </li>
                    </ul>
                </div>
            </div> 
            <div class="loading-container" v-show="!recommendMusicList.length">
               <loading></loading>
            </div>
        </Scroll>
        <router-view></router-view>
    </div>
</template>
<script>
import { getBanner, getRecommendMusicList } from "api/recommend";
import { ERR_OK } from "api/config";
import Slider from "base/slider/slider";
import Scroll from "base/scroll/scroll";
import Loading from "base/loading/loading";
import { mapMutations } from 'vuex'
export default {
  data() {
    return {
      recommends: [],
      recommendMusicList: []
    };
  },
  created() {
    this._getBanner();
    //模拟慢网速效果
    setTimeout(()=>{
    this._getRecommendMusicList();
    },1000)
  },
  methods: {
    _getBanner() {
      getBanner().then(res => {
        if (res.data.code === ERR_OK) {
          this.recommends = res.data.banners;
        }
      });
    },
    _getRecommendMusicList() {
      getRecommendMusicList().then(res => {
        if (res.data.code === ERR_OK) {
          console.log(res);
          this.recommendMusicList = res.data.result;
        }
      });
    },
    loadImg() {
      if (!this.checkLoaded) {
        this.$refs.scroll.refresh();
        this.checkLoaded = true;
      }
    },
    selectItem(item) {
        console.log(item);
        this.$router.push({
          path: `/recommend/${item.id}`
       })
       this.setRecommend(item);
    },
    ...mapMutations({
        setRecommend: 'SET_RECOMMEND'
    })
  },
  components: {
    Slider,
    Scroll,
    Loading
  }
};
</script>
<style lang="stylus" scoped>
@import '../../common/stylus/variable';

.recommend {
    position: fixed;
    width: 100%;
    top: 88px;
    bottom: 0;

    .recommend-content {
        height: 100%;
        overflow: hidden;

        .slider-wrapper {
            position: relative;
            width: 100%;
            overflow: hidden;
        }

        .recommend-list {
            .list-title {
                height: 65px;
                line-height: 65px;
                text-align: center;
                font-size: $font-size-medium;
                color: $color-theme;
            }

            .item {
                display: flex;
                box-sizing: border-box;
                align-items: center;
                padding: 0 20px 20px 20px;

                .icon {
                    flex: 0 0 60px;
                    width: 60px;
                    padding-right: 20px;
                }

                .text {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    flex: 1;
                    line-height: 20px;
                    overflow: hidden;
                    font-size: $font-size-medium;

                    .name {
                        margin-bottom: 10px;
                        color: $color-text;
                    }

                    .desc {
                        color: $color-text-d;
                    }
                }
            }
        }

        .loading-container {
            position: absolute;
            width: 100%;
            top: 50%;
            transform: translateY(-50%);
        }
    }
}
</style>

