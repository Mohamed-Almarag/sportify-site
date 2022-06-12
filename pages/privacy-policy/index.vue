<template>
  <div class="main_privacy_wrapper">
    <SharedHeroSection bgImage="playground">
      <template #sub_title>
        <h3 class="hero_sub_title">Privacy Policy</h3>
      </template>
    </SharedHeroSection>
    <div class="container-fluid">
      <div class="privacy_words">
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus
          animi, <a href="#">sportify</a> qui quis deserunt nostrum quo
          voluptate enim omnis distinctio autem officia ex magnam neque
          perspiciatis excepturi velit fugiat temporibus ratione fuga.
          Voluptatem, quasi fugiat quisquam ad minus in, laudantium deleniti
          quos, aliquam quam sequi animi ea culpa repellat! Temporibus, qui
          possimus veniam deleniti, impedit maxime, animi earum eveniet tempora
          corrupti minima? Quas eius placeat quidem tenetur cumque non
          reprehenderit, <a href="#">sportify</a> dolorum officiis id animi.
          Quasi quae, vitae, ullam fugit suscipit nisi provident vel dolore
          dolorum sint error eligendi cupiditate molestiae. Provident, totam! Ab
          debitis aperiam nostrum illum, ducimus corporis quae quis nulla sit
          sapiente! Voluptas dicta minima quibusdam. Doloremque voluptatem illo
          necessitatibus nemo magnam a? Placeat amet mollitia ex neque nisi
          iusto, autem voluptatem voluptates aliquam sed ut quo ipsum commodi
          beatae alias voluptate sapiente ad quia magnam exercitationem! Id
          necessitatibus quasi vero perspiciatis cum laborum nobis officia eius
          numquam officiis?
          <a href="#">sportify</a>
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea atque
          modi voluptatibus porro, iusto in est! Corporis delectus quos debitis
          cum inventore nihil voluptas quod odio reprehenderit odit, quam quas
          illo doloremque dolorem veritatis. Quis nostrum voluptates nihil autem
          exercitationem aliquam dicta inventore, reprehenderit repellat ipsam
          sunt incidunt quia, odit repudiandae facilis eum eveniet cupiditate
          distinctio? Qui unde nesciunt molestiae suscipit sint voluptates illum
          ducimus doloribus repellendus quis iusto architecto deserunt
          praesentium, magnam a? Quo explicabo doloremque a numquam deleniti?
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Privacy Policy',
}
</script>

<style lang="scss" scoped>
.main_privacy_wrapper {
  .privacy_words {
    padding: $main-padding 0;
    // margin-top: 40px;
    p {
      color: $text-color;
      line-height: 2;
      font-weight: 400;
      margin-bottom: 20px;
      font-size: 17px;
      a {
        color: $main-color;
        font-weight: 500;
        text-transform: capitalize;
        text-decoration: none;
      }
    }
  }
}
</style>
