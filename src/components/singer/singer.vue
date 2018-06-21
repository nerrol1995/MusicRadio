<template>
    <div class="singer">
    歌手页面
    </div>
</template>
<script>
import { getSingerList } from "api/singer";
import { ERR_OK } from "api/config";
export default {
  data() {
    return {
      singer: []
    };
  },
  created() {
    this._getSingerList();
  },
  methods: {
    _getSingerList() {
      getSingerList().then(res => {
        if (res.status === ERR_OK) {
          console.log(res);
        }
      });
    }
  }
};
</script>
<style lang="stylus" scoped>
.singer {
    position: fixed;
    top: 88px;
    bottom: 0;
    width: 100%;
}
</style>

