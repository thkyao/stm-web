
<template>
  <section class="page-base">
    <div class="contents">
      <div class="introduction">
        <p>早川 里美 （はやかわ さとみ）</p>
        <p>1989年 岩手県出身</p>
        <p>&nbsp;</p>
        <p>写真館勤務を経て2013年有限会社アイズクリエイティブ&モデルス入社</p>
        <p>安藤信之氏に師事</p>
        <p>&nbsp;</p>
        <p>2017年9月独立</p>
        <p>&nbsp;</p>
        <p>Contactよりお気軽にご相談・ご依頼ください。</p>
        <p>活動拠点は首都圏中心ですが、全国各地での仕事もお受けしております。</p>
      </div>
      <div class="meetmore">
        <p>
          <a
            :href="meetmoreUrl"
            target="_blank"
            rel="noopener"
            >
              <img
                loading="lazy"
                :src="meetmoreImg1"
                alt="ミツモアバッジ"
                width="50" 
                height="50"
                >
              <img
                style="display: none;"
                :src="meetmoreImg2"
              >
          </a>
        </p>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data () {
    return {
       meetmoreUrl: 'https://meetsmore.com/p/WtQ2n46X4HkLQk5E?from=badge&amp;id=5ad4369f8e97e0790b424e44',
       meetmoreImg1: 'https://i1.wp.com/meetsmore.com/images/badge_white.png?resize=50%2C50&amp;ssl=1',
       meetmoreImg2: 'https://meetsmore.com/api/inboundLink/show?profileId=5ad4369f8e97e0790b424e44',
    }
  }
}
</script>
<style lang="scss" scoped>
</style>