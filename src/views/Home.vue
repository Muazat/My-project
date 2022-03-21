<template>
  <div>
    <Header />
    <main>
      <div class="banner">
        <div class="container-b">
          <div class="info">
            <h1>
              Account Your <span>Spending</span> and Get Real Time Information
            </h1>
            <p>~~ Manage all your money in simpe and easy steps.</p>
            <p>~~ Calculate all your personal finances, Track all expenses,</p>
            <p>
              ~~ Keep ever spending crystal clear and know where to start saving
              from.
            </p>
            <button>Learn More</button>
            <button class="btn2">
              <a href="#sign-up" data-toggle="modal" class=" ">Explore Now</a>
            </button>
          </div>
          <div><img src="../assets/images/logo1.jpeg" alt="" /></div>
        </div>
      </div>
      <div class="banner-b">
        <img src="../assets/images/logo1.jpeg" alt="" />
      </div>

      <!-- -----------------------End of banner------------- -->

      <div class="container-2">
        <div class="section-one">
          <div>
            <h2>What is Lorem Ipsum?</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book
            </p>
          </div>
          <div><img src="../assets/images/logo3.svg" alt="" /></div>
        </div>
      </div>

      <!-- -------------------------end of section1============== -->

      <div class="container-3">
        <div class="section-three">
          <h2>Features</h2>
          <div class="features">
            <div class="fcards">
              <img src="../assets/images/logo6.png" alt="" />
              <h2>Track Spending</h2>
              <p>
                •Survived not only five centuries, but also the leap into
                electronic typesetting, •remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheet
              </p>
            </div>
            <div class="fcards">
              <img src="../assets/images/logo10.svg" alt="" />
              <h2>Plan Budget</h2>
              <p>
                •containing Lorem Ipsum passages,and more recently with desktop
                publishing software •like Aldus PageMaker including versions of
                Lorem Ipsum.It allows to print blank sales tag with Tag ID
                number.
              </p>
            </div>
            <div class="fcards">
              <img src="../assets/images/logo5.png" alt="" />
              <h2>Analyze Credits</h2>
              <p>
                •ontrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC, •here are many variations of passages of Lorem Ipsum
                available, but the majority have suffered alteration in some
                form
              </p>
            </div>
            <div class="fcards">
              <img src="../assets/images/logo8.svg" alt="" />
              <h2>Categorize Spending</h2>
              <p>
                •here are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form •ontrary
                to popular belief, Lorem Ipsum is not simply random text. It has
                roots in a piece of classical Latin literature from 45 BC,
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
</script>

<style scoped></style>
