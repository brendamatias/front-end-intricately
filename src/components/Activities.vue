<template>
  <div class="content">
    <div class="border">
      <span>ACTIVITIES</span>
    </div>
    <div>
      <div v-for="(activity, index) in activities" class="description-activities" :key="index">
        <div class="span">{{activity.date}} days ago</div>
        <img :src="activity.img" alt="Twitter" class="index.title" />
        <div>
          <p>
            {{activity.title}}
            <span>replaced</span>
          </p>
          <p>
            <u>Microsoft</u> 1 property
          </p>
        </div>
      </div>
      <div class="description-activities">
        <div class="span">18 days ago</div>
        <img :src="delivery" alt="Microsoft launched M-Cloud" class="index.title" />
        <div>
          <span>Microsoft launched M-Cloud</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import video from "../assets/zeplin-assets/Company Page/video-platform.png";
import delivery from "../assets/zeplin-assets/Company Page/content-delivery.png";
import security from "../assets/zeplin-assets/Company Page/waf-d-dos-security.png";
import management from "../assets/zeplin-assets/Company Page/traffic-management.png";
import dns from "../assets/zeplin-assets/Company Page/dns.png";
import monitoring from "../assets/zeplin-assets/Company Page/performance-monitoring.png";
import saas from "../assets/zeplin-assets/Company Page/saas.png";

export default {
  name: "Activities",
  data() {
    return {
      delivery: delivery,
      activities: [
        {
          date: "08",
          title: "Cloud Ochestration",
          img: video
        },
        {
          date: "10",
          title: "Express Scripts",
          img: delivery
        },
        {
          date: "12",
          title: "Kaiser Permanente",
          img: security
        },
        {
          date: "14",
          title: "Molina Healthcare",
          img: management
        },
        {
          date: "15",
          title: "Express Scripts",
          img: dns
        },
        {
          date: "16",
          title: "Kaiser Permanente",
          img: monitoring
        },
        {
          date: "17",
          title: "Molina Healthcare",
          img: saas
        }
      ]
    };
  }
};
</script>

<style>
.description-activities {
  display: flex;
  align-items: flex-start;
  padding: 20px 15px;
}
.description-activities div {
  padding: 0 15px;
}
.white {
  color: #fff;
  font-size: 10px;
}
span {
  font-size: 16px;
}
u,
.span {
  color: #a8a8a8;
}
</style>