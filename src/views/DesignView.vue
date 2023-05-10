<template>
  <section class="design-first" id="brand">
    <DesignHeader />
  </section>
 <section class="design-second" id="logo">
    <div class="container">
      <DesignLogo />
    </div>
  </section>
  <section class="design-third" id="unit">
    <div class="container">
      <DesignUnits />
    </div>
  </section>
  <section class="design-forth" id="color">
    <div class="container">
      <DesignColorList />
    </div>
  </section>
   <section class="design-fifth" id="bg">
      <DesignBack />
  </section>
  <section class="design-sixth" id="type">
      <DesignTypograph />
  </section>
 <section class="design-seventh" id="pattern">
      <DesignPattern />
  </section>
  <section class="design-eight" id="presentations">
      <DesignPresentation />
  </section>
   <section class="design-ninth" id="smm">
      <DesignSmm />
  </section>
  <section class="design-tenth" id="ban">
      <DesignBan />
  </section>
 <section class="design-eleven" id="imidge"> 
      <DesignImidge />
  </section>
  <section class="design-tenth" id="merch">
      <DesignMerch />
  </section>
</template>

<script>
// @ is an alias to /src
import DesignHeader from '@/components/DesignHeader.vue'
import DesignLogo from '@/components/design/DesignLogo.vue'
import DesignUnits from '@/components/design/DesignUnits.vue'
import DesignColorList from '@/components/design/DesignColorList.vue'
import DesignBack from '@/components/design/DesignBack.vue'
import DesignTypograph from '@/components/design/DesignTypograph.vue'
import DesignPattern from '@/components/design/DesignPattern.vue'
import DesignPresentation from '@/components/design/DesignPresentation.vue'
import DesignSmm from '@/components/design/DesignSmm.vue'
import DesignBan from '@/components/design/DesignBan.vue'
import DesignImidge from '@/components/design/DesignImidge.vue'
import DesignMerch from '@/components/design/DesignMerch.vue'

export default {
  name: 'HomeView',
  components: {
    DesignHeader, DesignLogo, DesignUnits, DesignColorList, DesignBack,DesignTypograph,DesignPattern,DesignPresentation,DesignSmm,DesignBan,DesignImidge,DesignMerch
  }
}
</script>
