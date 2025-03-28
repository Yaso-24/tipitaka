let booklist = `        <div id="sidebar">
<!-- <div id="headpic"></div> -->
<div class="bookName_panel"
  id="palibooks">
  
 
    <div class="pitakaName" onclick="booklabelopen(event, 'mulavi')">  ৰিনযপিটক </div>
    <li id="mula_1_2" class="mulavi" onclick="book(event, 'mula_1_1')">  পারাজিকপাল়ি </li>
    <li class="mulavi" onclick="book(event, 'mula_1_2')">  পাচিত্তিযপাল়ি </li>
    <li class="mulavi" onclick="book(event, 'mula_1_3')">  মহাৰগ্গপাল়ি </li>
    <li class="mulavi" onclick="book(event, 'mula_1_4')">  চূল়ৰগ্গপাল়ি </li>
    <li class="mulavi" onclick="book(event, 'mula_1_5')">  পরিৰারপাল়ি </li>
    <div class="pitakaName" onclick="booklabelopen(event, 'suttapali')"> সুত্তপিটক </div>
    <div class="suttapali bookName_panel2">
    <div class="pitakaName2 sutta" onclick="booklabelopen2(event, 'muladn')"> দীঘনিকায </div>
    <li class="muladn" onclick="book(event, 'mula_2_1_1')">  সীলক্খন্ধৰগ্গপাল়ি </li>
    <li class="muladn" onclick="book(event, 'mula_2_1_2')">  মহাৰগ্গপাল়ি </li>
    <li class="muladn" onclick="book(event, 'mula_2_1_3')">  পাথিকৰগ্গপাল়ি </li>
    <div class="pitakaName2 sutta" onclick="booklabelopen2(event, 'mulamn')"> মজ্ঝিমনিকায </div>
    <li class="mulamn" onclick="book(event, 'mula_2_2_1')">  মূলপণ্ণাসপাল়ি </li>
    <li class="mulamn" onclick="book(event, 'mula_2_2_2')">  মজ্ঝিমপণ্ণাসপাল়ি </li>
    <li class="mulamn" onclick="book(event, 'mula_2_2_3')">  উপরিপণ্ণাসপাল়ি </li>
    <div class="pitakaName2 sutta" onclick="booklabelopen2(event, 'mulasn')"> সংযুত্তনিকায </div>
    <li class="mulasn" onclick="book(event, 'mula_2_3_1')">  সগাথাৰগ্গপাল়ি </li>
    <li class="mulasn" onclick="book(event, 'mula_2_3_2')">  নিদানৰগ্গপাল়ি </li>
    <li class="mulasn" onclick="book(event, 'mula_2_3_3')">  খন্ধৰগ্গপাল়ি </li>
    <li class="mulasn" onclick="book(event, 'mula_2_3_4')">  সল়াযতনৰগ্গপাল়ি </li>
    <li class="mulasn" onclick="book(event, 'mula_2_3_5')">  মহাৰগ্গপাল়ি </li>
    <div class="pitakaName2 sutta" onclick="booklabelopen2(event, 'mulaan')"> অঙ্গুত্তরনিকায </div>
    <li class="mulaan" onclick="book(event, 'mula_2_4_1')">  এককনিপাতপাল়ি </li>
    <li class="mulaan" onclick="book(event, 'mula_2_4_2')">  দুকনিপাতপাল়ি </li>
    <li class="mulaan" onclick="book(event, 'mula_2_4_3')">  তিকনিপাতপাল়ি </li>
    <li class="mulaan" onclick="book(event, 'mula_2_4_4')">  চতুক্কনিপাতপাল়ি </li>
    <li class="mulaan" onclick="book(event, 'mula_2_4_5')">  পঞ্চকনিপাতপাল়ি </li>
    <li class="mulaan" onclick="book(event, 'mula_2_4_6')">  ছক্কনিপাতপাল়ি </li>
    <li class="mulaan" onclick="book(event, 'mula_2_4_7')">  সত্তকনিপাতপাল়ি </li>
    <li class="mulaan" onclick="book(event, 'mula_2_4_8')">  অট্ঠকাদিনিপাতপাল়ি </li>
    <li class="mulaan" onclick="book(event, 'mula_2_4_9')">  নৰকনিপাতপাল়ি </li>
    <li class="mulaan" onclick="book(event, 'mula_2_4_10')">  দসকনিপাতপাল়ি </li>
    <li class="mulaan" onclick="book(event, 'mula_2_4_11')">  একাদসকনিপাতপাল়ি </li>
    <div class="pitakaName2 sutta" onclick="booklabelopen2(event, 'mulakn')"> খুদ্দকনিকায </div>
    <li class="mulakn" onclick="book(event, 'mula_2_5_1')">  খুদ্দকপাঠপাল়ি </li>
    <li class="mulakn" onclick="book(event, 'mula_2_5_2')">  ধম্মপদপাল়ি </li>
    <li class="mulakn" onclick="book(event, 'mula_2_5_3')">  উদানপাল়ি </li>
    <li class="mulakn" onclick="book(event, 'mula_2_5_4')">  ইতিৰুত্তকপাল়ি </li>
    <li class="mulakn" onclick="book(event, 'mula_2_5_5')">  সুত্তনিপাতপাল়ি </li>
    <li class="mulakn" onclick="book(event, 'mula_2_5_6')">  ৰিমানৰত্থুপাল়ি </li>
    <li class="mulakn" onclick="book(event, 'mula_2_5_7')">  পেতৰত্থুপাল়ি </li>
    <li class="mulakn" onclick="book(event, 'mula_2_5_8')">  থেরগাথাপাল়ি </li>
    <li class="mulakn" onclick="book(event, 'mula_2_5_9')">  থেরীগাথাপাল়ি </li>
    <li class="mulakn" onclick="book(event, 'mula_2_5_10')">  অপদানপাল়ি </li>
    <li class="mulakn" onclick="book(event, 'mula_2_5_11')">  বুদ্ধৰংসপাল়ি </li>
    <li class="mulakn" onclick="book(event, 'mula_2_5_12')">  চরিযাপিটকপাল়ি </li>
    <li class="mulakn" onclick="book(event, 'mula_2_5_13')">  জাতকপাল়ি-১ </li>
    <li class="mulakn" onclick="book(event, 'mula_2_5_14')">  জাতকপাল়ি-২ </li>
    <li class="mulakn" onclick="book(event, 'mula_2_5_15')">  জাতকপাল়ি-৩ </li>
    <li class="mulakn" onclick="book(event, 'mula_2_5_16')">  জাতকপাল়ি-৪ </li>
    <li class="mulakn" onclick="book(event, 'mula_2_5_17')">  জাতকপাল়ি-৫ </li>
    <li class="mulakn" onclick="book(event, 'mula_2_5_18')">  জাতকপাল়ি-৬ </li>
    <li class="mulakn" onclick="book(event, 'mula_2_5_19')">  মহানিদ্দেসপাল়ি </li>
    <li class="mulakn" onclick="book(event, 'mula_2_5_20')">  চূল়নিদ্দেসপাল়ি </li>
    <li class="mulakn" onclick="book(event, 'mula_2_5_21')">  পটিসম্ভিদামগ্গপাল়ি </li>
    <li class="mulakn" onclick="book(event, 'mula_2_5_22')">  নেত্তিপ্পকরণপাল়ি </li>
    <li class="mulakn" onclick="book(event, 'mula_2_5_23')">  মিলিন্দপঞ্হপাল়ি </li>
    <li class="mulakn" onclick="book(event, 'mula_2_5_24')">  পেটকোপদেসপাল়ি </li>
    </div>
    <div class="pitakaName" onclick="booklabelopen(event, 'mulaabhi')">  অভিধম্মপিটক </div>
    <li class="mulaabhi" onclick="book(event, 'mula_3_1')">  ধম্মসঙ্গণীপাল়ি </li>
    <li class="mulaabhi" onclick="book(event, 'mula_3_2')">  ৰিভঙ্গপাল়ি </li>
    <li class="mulaabhi" onclick="book(event, 'mula_3_3')">  ধাতুকথাপাল়ি </li>
    <li class="mulaabhi" onclick="book(event, 'mula_3_4')">  পুগ্গলপঞ্ঞত্তিপাল়ি </li>
    <li class="mulaabhi" onclick="book(event, 'mula_3_5')">  কথাৰত্থুপাল়ি </li>
    <li class="mulaabhi" onclick="book(event, 'mula_3_6')">  যমকপাল়ি-১ </li>
    <li class="mulaabhi" onclick="book(event, 'mula_3_7')">  যমকপাল়ি-২ </li>
    <li class="mulaabhi" onclick="book(event, 'mula_3_8')">  যমকপাল়ি-৩ </li>
    <li class="mulaabhi" onclick="book(event, 'mula_3_9')">  পট্ঠানপাল়ি-১ </li>
    <li class="mulaabhi" onclick="book(event, 'mula_3_10')">  পট্ঠানপাল়ি-২ </li>
    <li class="mulaabhi" onclick="book(event, 'mula_3_11')">  পট্ঠানপাল়ি-৩ </li>
    <li class="mulaabhi" onclick="book(event, 'mula_3_12')">  পট্ঠানপাল়ি-৪ </li>
    <li class="mulaabhi" onclick="book(event, 'mula_3_13')">  পট্ঠানপাল়ি-৫ </li>
    <hr>
    <div class="pitakaName" onclick="booklabelopen(event, 'atthavi')">  ৰিনযপিটক (অট্ঠকথা)
    </div>
    <li class="atthavi" onclick="book(event, 'atth_1_1')">  পারাজিককণ্ড-অট্ঠকথা </li>
    <li class="atthavi" onclick="book(event, 'atth_1_2')">  পাচিত্তিয-অট্ঠকথা </li>
    <li class="atthavi" onclick="book(event, 'atth_1_3')">  মহাৰগ্গ-অট্ঠকথা </li>
    <li class="atthavi" onclick="book(event, 'atth_1_4')">  চূল়ৰগ্গ-অট্ঠকথা </li>
    <li class="atthavi" onclick="book(event, 'atth_1_5')">  পরিৰার-অট্ঠকথা </li>
    <div class="pitakaName" onclick="booklabelopen(event, 'atthasuttapali')"> সুত্তপিটক (অট্ঠকথা) </div>
    <div class="atthasuttapali bookName_panel2">
    <div class="pitakaName2 atthasutta" onclick="booklabelopen2(event, 'atthaadn')">  দীঘ নিকায (অট্ঠকথা)
    </div>
    <li class="atthaadn" onclick="book(event, 'atth_2_1_1')">  সীলক্খন্ধৰগ্গ-অট্ঠকথা </li>
    <li class="atthaadn" onclick="book(event, 'atth_2_1_2')">  মহাৰগ্গ-অট্ঠকথা </li>
    <li class="atthaadn" onclick="book(event, 'atth_2_1_3')">  পাথিকৰগ্গ-অট্ঠকথা </li>
     <div class="pitakaName2 atthasutta" onclick="booklabelopen2(event, 'atthaamn')">  মজ্ঝিমনিকায (অট্ঠকথা)
    </div>
    <li class="atthaamn" onclick="book(event, 'atth_2_2_1')">  মূলপণ্ণাস-অট্ঠকথা </li>
    <li class="atthaamn" onclick="book(event, 'atth_2_2_2')">  মজ্ঝিমপণ্ণাস-অট্ঠকথা </li>
    <li class="atthaamn" onclick="book(event, 'atth_2_2_3')">  উপরিপণ্ণাস-অট্ঠকথা </li>
    <div class="pitakaName2 atthasutta" onclick="booklabelopen2(event, 'atthaasn')">  সংযুত্তনিকায (অট্ঠকথা)
    </div>
    <li class="atthaasn" onclick="book(event, 'atth_2_3_1')">  সগাথাৰগ্গ-অট্ঠকথা </li>
    <li class="atthaasn" onclick="book(event, 'atth_2_3_2')">  নিদানৰগ্গ-অট্ঠকথা </li>
    <li class="atthaasn" onclick="book(event, 'atth_2_3_3')">  খন্ধৰগ্গ-অট্ঠকথা </li>
    <li class="atthaasn" onclick="book(event, 'atth_2_3_4')">  সল়াযতনৰগ্গ-অট্ঠকথা </li>
    <li class="atthaasn" onclick="book(event, 'atth_2_3_5')">  মহাৰগ্গ-অট্ঠকথা </li>
    <div class="pitakaName2 atthasutta" onclick="booklabelopen2(event, 'atthaan')">  অঙ্গুত্তরনিকায
    (অট্ঠকথা) </div>
    <li class="atthaan" onclick="book(event, 'atth_2_4_1')">  এককনিপাত-অট্ঠকথা </li>
    <li class="atthaan" onclick="book(event, 'atth_2_4_2')">  দুকনিপাত-অট্ঠকথা </li>
    <li class="atthaan" onclick="book(event, 'atth_2_4_3')">  তিকনিপাত-অট্ঠকথা </li>
    <li class="atthaan" onclick="book(event, 'atth_2_4_4')">  চতুক্কনিপাত-অট্ঠকথা </li>
    <li class="atthaan" onclick="book(event, 'atth_2_4_5')">  পঞ্চকনিপাত-অট্ঠকথা </li>
    <li class="atthaan" onclick="book(event, 'atth_2_4_6')">  ছক্কনিপাত-অট্ঠকথা </li>
    <li class="atthaan" onclick="book(event, 'atth_2_4_7')">  সত্তকনিপাত-অট্ঠকথা </li>
    <li class="atthaan" onclick="book(event, 'atth_2_4_8')">  অট্ঠকনিপাত-অট্ঠকথা </li>
    <li class="atthaan" onclick="book(event, 'atth_2_4_9')">  নৰকনিপাত-অট্ঠকথা </li>
    <li class="atthaan" onclick="book(event, 'atth_2_4_10')">  দসকনিপাত-অট্ঠকথা </li>
    <li class="atthaan" onclick="book(event, 'atth_2_4_11')">  একাদসকনিপাত-অট্ঠকথা </li>
    <div class="pitakaName2 atthasutta" onclick="booklabelopen2(event, 'atthakn')"> খুদ্দকনিকায (অট্ঠকথা)
    </div>
    <li class="atthakn" onclick="book(event, 'atth_2_5_1')">  খুদ্দকপাঠ-অট্ঠকথা </li>
    <li class="atthakn" onclick="book(event, 'atth_2_5_2')">  ধম্মপদ-অট্ঠকথা </li>
    <li class="atthakn" onclick="book(event, 'atth_2_5_3')">  উদান-অট্ঠকথা </li>
    <li class="atthakn" onclick="book(event, 'atth_2_5_4')">  ইতিৰুত্তক-অট্ঠকথা </li>
    <li class="atthakn" onclick="book(event, 'atth_2_5_5')">  সুত্তনিপাত-অট্ঠকথা </li>
    <li class="atthakn" onclick="book(event, 'atth_2_5_6')">  ৰিমানৰত্থু-অট্ঠকথা </li>
    <li class="atthakn" onclick="book(event, 'atth_2_5_7')">  পেতৰত্থু-অট্ঠকথা </li>
    <li class="atthakn" onclick="book(event, 'atth_2_5_8')">  থেরগাথা-অট্ঠকথা 1-2 </li>
    <li class="atthakn" onclick="book(event, 'atth_2_5_9')">  থেরীগাথা-অট্ঠকথা </li>
    <li class="atthakn" onclick="book(event, 'atth_2_5_10')">  অপদান-অট্ঠকথা </li>
    <li class="atthakn" onclick="book(event, 'atth_2_5_11')">  বুদ্ধৰংস-অট্ঠকথা </li>
    <li class="atthakn" onclick="book(event, 'atth_2_5_12')">  চরিযাপিটক-অট্ঠকথা </li>
    <li class="atthakn" onclick="book(event, 'atth_2_5_13')">  জাতক-অট্ঠকথা-১ </li>
    <li class="atthakn" onclick="book(event, 'atth_2_5_14')">  জাতক-অট্ঠকথা-২ </li>
    <li class="atthakn" onclick="book(event, 'atth_2_5_15')">  জাতক-অট্ঠকথা-৩ </li>
    <li class="atthakn" onclick="book(event, 'atth_2_5_16')">  জাতক-অট্ঠকথা-৪ </li>
    <li class="atthakn" onclick="book(event, 'atth_2_5_17')">  জাতক-অট্ঠকথা-৫ </li>
    <li class="atthakn" onclick="book(event, 'atth_2_5_18')">  জাতক-অট্ঠকথা ৬-৭ </li>
    <li class="atthakn" onclick="book(event, 'atth_2_5_19')">  মহানিদ্দেস-অট্ঠকথা </li>
    <li class="atthakn" onclick="book(event, 'atth_2_5_20')">  চূল়নিদ্দেস-অট্ঠকথা </li>
    <li class="atthakn" onclick="book(event, 'atth_2_5_21')">  পটিসম্ভিদামগ্গ-অট্ঠকথা </li>
    <li class="atthakn" onclick="book(event, 'atth_2_5_22')">  নেত্তিপ্পকরণ-অট্ঠকথা </li>
    </div>
    <div class="pitakaName" onclick="booklabelopen(event, 'atthaabhi')">  অভিধম্মপিটক
    (অট্ঠকথা) </div>
    <li class="atthaabhi" onclick="book(event, 'atth_3_1')">  ধম্মসঙ্গণি-অট্ঠকথা </li>
    <li class="atthaabhi" onclick="book(event, 'atth_3_2')">  ৰিভঙ্গ-অট্ঠকথা </li>
    <li class="atthaabhi" onclick="book(event, 'atth_3_3')">  ধাতুকথা-অট্ঠকথা </li>
    <li class="atthaabhi" onclick="book(event, 'atth_3_4')">  পুগ্গলপঞ্ঞত্তি-অট্ঠকথা </li>
    <li class="atthaabhi" onclick="book(event, 'atth_3_5')">  কথাৰত্থু-অট্ঠকথা </li>
    <li class="atthaabhi" onclick="book(event, 'atth_3_6')">  যমকপ্পকরণ-অট্ঠকথা </li>
    <li class="atthaabhi" onclick="book(event, 'atth_3_7')">  পট্ঠানপ্পকরণ-অট্ঠকথা </li>
    <hr>
    <div class="pitakaName" onclick="booklabelopen(event, 'tikavi')">  ৰিনযপিটক (টীকা) </div>
    <li class="tikavi" onclick="book(event, 'thika_1_1')">  সারত্থদীপনী-টীকা-১ </li>
    <li class="tikavi" onclick="book(event, 'thika_1_2')">  সারত্থদীপনী-টীকা-২ </li>
    <li class="tikavi" onclick="book(event, 'thika_1_3')">  সারত্থদীপনী-টীকা-৩ </li>
    <li class="tikavi" onclick="book(event, 'thika_1_4')">  মহাৰগ্গ-টীকা </li>
    <li class="tikavi" onclick="book(event, 'thika_1_5')">  চূল়ৰগ্গ-টীকা </li>
    <li class="tikavi" onclick="book(event, 'thika_1_6')">  পরিৰার-টীকা </li>
    <li class="tikavi" onclick="book(event, 'thika_1_7')">  দ্বেমাতিকাপাল়ি </li>
    <li class="tikavi" onclick="book(event, 'thika_1_8')">  ৰিনযসঙ্গহ-অট্ঠকথা </li>
    <li class="tikavi" onclick="book(event, 'thika_1_9')">  ৰজিরবুদ্ধি-টীকা </li>
    <li class="tikavi" onclick="book(event, 'thika_1_10')">  ৰিমতিৰিনোদনী-টীকা </li>
    <li class="tikavi" onclick="book(event, 'thika_1_11')">  ৰিনযালঙ্কার-টীকা </li>
    <li class="tikavi" onclick="book(event, 'thika_1_12')">  কঙ্খাৰিতরণীপুরাণ-টীকা </li>
    <li class="tikavi" onclick="book(event, 'thika_1_13')">  ৰিনযৰিনিচ্ছয-উত্তরৰিনিচ্ছয </li>
    <li class="tikavi" onclick="book(event, 'thika_1_14')">  ৰিনযৰিনিচ্ছয-টীকা </li>
    <li class="tikavi" onclick="book(event, 'thika_1_15')">  পাচিত্যাদিযোজনাপাল়ি </li>
    <li class="tikavi" onclick="book(event, 'thika_1_16')">  খুদ্দসিক্খা-মূলসিক্খা </li>
    <div class="pitakaName" onclick="booklabelopen(event, 'tiksuttapali')"> সুত্তপিটক (টীকা) </div>
    <div class="tiksuttapali bookName_panel2">
    <div class="pitakaName2 tiksutta" onclick="booklabelopen2(event, 'tikadn')"> দীঘনিকায (টীকা) </div>
    <li class="tikadn" onclick="book(event, 'thika_2_1_1')">  সীলক্খন্ধৰগ্গ-টীকা </li>
    <li class="tikadn" onclick="book(event, 'thika_2_1_2')">  মহাৰগ্গ-টীকা </li>
    <li class="tikadn" onclick="book(event, 'thika_2_1_3')">  পাথিকৰগ্গ-টীকা </li>
    <li class="tikadn" onclick="book(event, 'thika_2_1_4')">  সীলক্খন্ধৰগ্গ-অভিনৰটীকা-১ </li>
    <li class="tikadn" onclick="book(event, 'thika_2_1_5')">  সীলক্খন্ধৰগ্গ-অভিনৰটীকা-২ </li>
    <div class="pitakaName2 tiksutta" onclick="booklabelopen2(event, 'tikamn')">  মজ্ঝিমনিকায (টীকা)
    </div>
    <li class="tikamn" onclick="book(event, 'thika_2_2_1')">  মূলপণ্ণাস-টীকা </li>
    <li class="tikamn" onclick="book(event, 'thika_2_2_2')">  মজ্ঝিমপণ্ণাস-টীকা </li>
    <li class="tikamn" onclick="book(event, 'thika_2_2_3')">  উপরিপণ্ণাস-টীকা </li>
    <div class="pitakaName2 tiksutta" onclick="booklabelopen2(event, 'tikasn')">  সংযুত্তনিকায (টীকা)
    </div>
    <li class="tikasn" onclick="book(event, 'thika_2_3_1')">  সগাথাৰগ্গ-টীকা </li>
    <li class="tikasn" onclick="book(event, 'thika_2_3_2')">  নিদানৰগ্গ-টীকা </li>
    <li class="tikasn" onclick="book(event, 'thika_2_3_3')">  খন্ধৰগ্গ-টীকা </li>
    <li class="tikasn" onclick="book(event, 'thika_2_3_4')">  সল়াযতনৰগ্গ-টীকা </li>
    <li class="tikasn" onclick="book(event, 'thika_2_3_5')">  মহাৰগ্গ-টীকা </li>
    <div class="pitakaName2 tiksutta" onclick="booklabelopen2(event, 'tikaan')">  অঙ্গুত্তরনিকায (টীকা)
    </div>
    <li class="tikaan" onclick="book(event, 'thika_2_4_1')">  এককনিপাত-টীকা </li>
    <li class="tikaan" onclick="book(event, 'thika_2_4_2')">  দুকনিপাত-টীকা </li>
    <li class="tikaan" onclick="book(event, 'thika_2_4_3')">  তিকনিপাত-টীকা </li>
    <li class="tikaan" onclick="book(event, 'thika_2_4_4')">  চতুক্কনিপাত-টীকা </li>
    <li class="tikaan" onclick="book(event, 'thika_2_4_5')">  পঞ্চকনিপাত-টীকা </li>
    <li class="tikaan" onclick="book(event, 'thika_2_4_6')">  ছক্কনিপাত-টীকা </li>
    <li class="tikaan" onclick="book(event, 'thika_2_4_7')">  সত্তকনিপাত-টীকা </li>
    <li class="tikaan" onclick="book(event, 'thika_2_4_8')">  অট্ঠকনিপাত-টীকা </li>
    <li class="tikaan" onclick="book(event, 'thika_2_4_9')">  নৰকনিপাত-টীকা </li>
    <li class="tikaan" onclick="book(event, 'thika_2_4_10')">  দসকনিপাত-টীকা </li>
    <li class="tikaan" onclick="book(event, 'thika_2_4_11')">  একাদসকনিপাত-টীকা </li>
    <div class="pitakaName2 tiksutta" onclick="booklabelopen2(event, 'tikakn')">  খুদ্দকনিকায (টীকা)
    </div>
    <li class="tikakn" onclick="book(event, 'thika_2_5_1')">  নেত্তিপ্পকরণ-টীকা </li>
    <li class="tikakn" onclick="book(event, 'thika_2_5_2')">  নেত্তিৰিভাৰিনী </li>
    </div>
    <div class="pitakaName" onclick="booklabelopen(event, 'tikaabhi')"> অভিধম্মপিটক (টীকা)
    </div>
    <li class="tikaabhi" onclick="book(event, 'thika_3_1')">  ধম্মসঙ্গণি-মূলটীকা </li>
    <li class="tikaabhi" onclick="book(event, 'thika_3_2')">  ৰিভঙ্গ-মূলটীকা </li>
    <li class="tikaabhi" onclick="book(event, 'thika_3_3')">  ধাতুকথা-মূলটীকা </li>
    <li class="tikaabhi" onclick="book(event, 'thika_3_4')">  পুগ্গলপঞ্ঞত্তি-মূলটীকা </li>
    <li class="tikaabhi" onclick="book(event, 'thika_3_5')">  কথাৰত্থু-মূলটীকা </li>
    <li class="tikaabhi" onclick="book(event, 'thika_3_6')">  যমকপ্পকরণ-মূলটীকা </li>
    <li class="tikaabhi" onclick="book(event, 'thika_3_7')">  পট্ঠানপ্পকরণ-মূলটীকা </li>
    <li class="tikaabhi" onclick="book(event, 'thika_3_8')">  ধম্মসঙ্গণী-অনুটীকা </li>
    <li class="tikaabhi" onclick="book(event, 'thika_3_9')">  পঞ্চপকরণ-অনুটীকা </li>
    <li class="tikaabhi" onclick="book(event, 'thika_3_10')">  অভিধম্মাৰতারো-নামরূপপরিচ্ছেদো </li>
    <li class="tikaabhi" onclick="book(event, 'thika_3_11')">  অভিধম্মত্থসঙ্গহো </li>
    <li class="tikaabhi" onclick="book(event, 'thika_3_12')">  অভিধম্মাৰতার-পুরাণটীকা </li>
    <li class="tikaabhi" onclick="book(event, 'thika_3_13')">  অভিধম্মমাতিকাপাল়ি </li>
    <hr>
    <div class="pitakaName" onclick="booklabelopen(event, 'annapali')">  অঞ্ঞ </div>
    <div class="annapali bookName_panel2">
    <div class="pitakaName2" onclick="booklabelopen2(event, 'annovisu')">  ৰিসুদ্ধিমগ্গ </div>
    <li class="annovisu" onclick="book(event, 'anno_1_1')">  ৰিসুদ্ধিমগ্গ-১ </li>
    <li class="annovisu" onclick="book(event, 'anno_1_2')">  ৰিসুদ্ধিমগ্গ-২ </li>
    <li class="annovisu" onclick="book(event, 'anno_1_3')">  ৰিসুদ্ধিমগ্গ-মহাটীকা-১ </li>
    <li class="annovisu" onclick="book(event, 'anno_1_4')">  ৰিসুদ্ধিমগ্গ-মহাটীকা-২ </li>
    <li class="annovisu" onclick="book(event, 'anno_1_5')">  ৰিসুদ্ধিমগ্গ নিদানকথা </li>
    <div class="pitakaName2" onclick="booklabelopen2(event, 'annosanga')">  সঙ্গাযন-পুচ্ছ
    ৰিস্সজ্জনা </div>
    <li class="annosanga" onclick="book(event, 'anno_2_1')">  দীঘনিকায (পু-ৰি) </li>
    <li class="annosanga" onclick="book(event, 'anno_2_2')">  মজ্ঝিমনিকায (পু-ৰি) </li>
    <li class="annosanga" onclick="book(event, 'anno_2_3')">  সংযুত্তনিকায (পু-ৰি) </li>
    <li class="annosanga" onclick="book(event, 'anno_2_4')">  অঙ্গুত্তরনিকায (পু-ৰি) </li>
    <li class="annosanga" onclick="book(event, 'anno_2_5')">  ৰিনযপিটক (পু-ৰি) </li>
    <li class="annosanga" onclick="book(event, 'anno_2_6')">  অভিধম্মপিটক (পু-ৰি) </li>
    <li class="annosanga" onclick="book(event, 'anno_2_7')">  অট্ঠকথা (পু-ৰি) </li>
    <div class="pitakaName2" onclick="booklabelopen2(event, 'annoledisay')">  লেডী সযাডো
    গন্থ-সঙ্গহো </div>
    <li class="annoledisay" onclick="book(event, 'anno_3_1')">  নিরুত্তিদীপনী </li>
    <li class="annoledisay" onclick="book(event, 'anno_3_2')">  পরমত্থদীপনী সঙ্গহমহাটীকাপাঠ </li>
    <li class="annoledisay" onclick="book(event, 'anno_3_3')">  অনুদীপনীপাঠ </li>
    <li class="annoledisay" onclick="book(event, 'anno_3_4')">  পট্ঠানুদ্দেস দীপনীপাঠ </li>
    <div class="pitakaName2" onclick="booklabelopen2(event, 'annobuddhava')">  বুদ্ধ-ৰন্দনা
    গন্থ-সঙ্গহো </div>
    <li class="annobuddhava" onclick="book(event, 'anno_4_1')">  নমক্কারটীকা </li>
    <li class="annobuddhava" onclick="book(event, 'anno_4_2')">  মহাপণামপাঠ </li>
    <li class="annobuddhava" onclick="book(event, 'anno_4_3')">  লক্খণাতো বুদ্ধথোমনাগাথা </li>
    <li class="annobuddhava" onclick="book(event, 'anno_4_4')">  সুতৰন্দনা </li>
    <li class="annobuddhava" onclick="book(event, 'anno_4_5')">  কমলাঞ্জলি </li>
    <li class="annobuddhava" onclick="book(event, 'anno_4_6')">  জিনালঙ্কার </li>
    <li class="annobuddhava" onclick="book(event, 'anno_4_7')">  পজ্জমধু </li>
    <li class="annobuddhava" onclick="book(event, 'anno_4_8')">  বুদ্ধগুণগাথাৰলী </li>
    <div class="pitakaName2" onclick="booklabelopen2(event, 'annovangsa')">  ৰংস-গন্থ-সঙ্গহো
    </div>
    <li class="annovangsa" onclick="book(event, 'anno_5_1')">  চূল়গন্থৰংস </li>
    <li class="annovangsa" onclick="book(event, 'anno_5_2')">  মহাৰংস </li>
    <li class="annovangsa" onclick="book(event, 'anno_5_3')">  সাসনৰংস </li>
    <div class="pitakaName2" onclick="booklabelopen2(event, 'annobyakar')">  ব্যাকরণ
    গন্থ-সঙ্গহো </div>
    <li class="annobyakar" onclick="book(event, 'anno_6_1')">  কচ্চাযনব্যাকরণং </li>
    <li class="annobyakar" onclick="book(event, 'anno_6_2')">  মোগ্গল্লানব্যাকরণং </li>
    <li class="annobyakar" onclick="book(event, 'anno_6_3')">  সদ্দনীতিপ্পকরণং (পদমালা) </li>
    <li class="annobyakar" onclick="book(event, 'anno_6_4')">  সদ্দনীতিপ্পকরণং (ধাতুমালা) </li>
    <li class="annobyakar" onclick="book(event, 'anno_6_5')">  পদরূপসিদ্ধি </li>
    <li class="annobyakar" onclick="book(event, 'anno_6_6')">  মোগল্লানপঞ্চিকা </li>
    <li class="annobyakar" onclick="book(event, 'anno_6_7')">  পযোগসিদ্ধিপাঠ </li>
    <li class="annobyakar" onclick="book(event, 'anno_6_8')">  ৰুত্তোদযপাঠ </li>
    <li class="annobyakar" onclick="book(event, 'anno_6_9')">  অভিধানপ্পদীপিকাপাঠ </li>
    <li class="annobyakar" onclick="book(event, 'anno_6_10')">  অভিধানপ্পদীপিকাটীকা </li>
    <li class="annobyakar" onclick="book(event, 'anno_6_11')">  সুবোধালঙ্কারপাঠ </li>
    <li class="annobyakar" onclick="book(event, 'anno_6_12')">  সুবোধালঙ্কারটীকা </li>
    <li class="annobyakar" onclick="book(event, 'anno_6_13')">  বালাৰতার গণ্ঠিপদত্থৰিনিচ্ছযসার </li>
    <div class="pitakaName2" onclick="booklabelopen2(event, 'annoniti')">  নীতি-গন্থ-সঙ্গহো
    </div>
    <li class="annoniti" onclick="book(event, 'anno_7_1')">  লোকনীতি </li>
    <li class="annoniti" onclick="book(event, 'anno_7_2')">  সুত্তন্তনীতি </li>
    <li class="annoniti" onclick="book(event, 'anno_7_3')">  সূরস্সতিনীতি </li>
    <li class="annoniti" onclick="book(event, 'anno_7_4')">  মহারহনীতি </li>
    <li class="annoniti" onclick="book(event, 'anno_7_5')">  ধম্মনীতি </li>
    <li class="annoniti" onclick="book(event, 'anno_7_6')">  কৰিদপ্পণনীতি </li>
    <li class="annoniti" onclick="book(event, 'anno_7_7')">  নীতিমঞ্জরী </li>
    <li class="annoniti" onclick="book(event, 'anno_7_8')">  নরদক্খদীপনী </li>
    <li class="annoniti" onclick="book(event, 'anno_7_9')">  চতুরারক্খদীপনী </li>
    <li class="annoniti" onclick="book(event, 'anno_7_10')">  চাণক্যনীতি </li>
    <div class="pitakaName2" onclick="booklabelopen2(event, 'annopakinnaka')"> 
    পকিণ্ণক-গন্থ-সঙ্গহো </div>
    <li class="annopakinnaka" onclick="book(event, 'anno_8_1')">  রসৰাহিনী </li>
    <li class="annopakinnaka" onclick="book(event, 'anno_8_2')">  সীমৰিসোধনীপাঠ </li>
    <li class="annopakinnaka" onclick="book(event, 'anno_8_3')">  ৰেস্সন্তরগীতি </li>
    <div class="pitakaName2" onclick="booklabelopen2(event, 'annosihala')">  সিহল়-গন্থ-সঙ্গহো
    </div>
    <li class="annosihala" onclick="book(event, 'anno_9_1')">  মোগ্গল্লান ৰুত্তিৰিৰরণপঞ্চিকা </li>
    <li class="annosihala" onclick="book(event, 'anno_9_2')">  থূপৰংস </li>
    <li class="annosihala" onclick="book(event, 'anno_9_3')">  দাঠাৰংস </li>
    <li class="annosihala" onclick="book(event, 'anno_9_4')">  ধাতুপাঠৰিলাসিনিযা </li>
    <li class="annosihala" onclick="book(event, 'anno_9_5')">  ধাতুৰংস </li>
    <li class="annosihala" onclick="book(event, 'anno_9_6')">  হত্থৰনগল্লৰিহারৰংস </li>
    <li class="annosihala" onclick="book(event, 'anno_9_7')">  জিনচরিতয </li>
    <li class="annosihala" onclick="book(event, 'anno_9_8')">  জিনৰংসদীপং </li>
    <li class="annosihala" onclick="book(event, 'anno_9_9')">  তেলকটাহগাথা </li>
    <li class="annosihala" onclick="book(event, 'anno_9_10')">  মিলিদটীকা </li>
    <li class="annosihala" onclick="book(event, 'anno_9_11')">  পদমঞ্জরী </li>
    <li class="annosihala" onclick="book(event, 'anno_9_12')">  পদসাধনং </li>
    <li class="annosihala" onclick="book(event, 'anno_9_13')">  সদ্দবিন্দুপকরণং </li>
    <li class="annosihala" onclick="book(event, 'anno_9_14')">  কচ্চাযনধাতুমঞ্জুসা </li>
    <li class="annosihala" onclick="book(event, 'anno_9_15')">  সামন্তকূটৰণ্ণনা </li>
    
  </div>
  <hr>
  <br><br><br><br><br><br><br><br>
</div>
<div class="bookName_panel"
  id="banglabooks">
 
<div class=" pitakaName mulabnvin_nikaya" onclick="booklabelopen(event, 'mulabnvin')"> বিনয়পিটক (মূল) </div>
<li class="mulabnvin" onclick="book(event, 'mulabn_1_1')">  পারাজিকা </li>
<li class="mulabnvin" onclick="book(event, 'mulabn_1_2')">  পাচিত্তিয় </li>
<li class="mulabnvin" onclick="book(event, 'mulabn_1_3')">  ভিক্ষুণী-বিভঙ্গ </li>
<li class="mulabnvin" onclick="book(event, 'mulabn_1_4')">  মহাবর্গ </li>
<li class="mulabnvin" onclick="book(event, 'mulabn_1_5')">  চূলবর্গ </li>
<li class="mulabnvin" onclick="book(event, 'mulabn_1_6')">  পরিবার </li>
<div class=" pitakaName mulabn_sutta" onclick="booklabelopen(event, 'suttabn')"> সুত্র পিটক (মূল) </div>
<div class="suttabn bookName_panel2">
<div class=" pitakaName2 mulabndn_nikaya" onclick="booklabelopen2(event, 'mulabndn')"> দীর্ঘনিকায় (মূল) </div>
<li class="mulabndn" onclick="book(event, 'mulabn_2_1_1')">  শীলস্কন্ধ-বর্গ </li>
<li class="mulabndn" onclick="book(event, 'mulabn_2_1_2')">  মহাবর্গ </li>
<li class="mulabndn" onclick="book(event, 'mulabn_2_1_3')">  পথিক-বর্গ </li>
<div class=" pitakaName2 mulabnmn_nikaya" onclick="booklabelopen2(event, 'mulabnmn')"> মধ্যমনিকায় (মূল) </div>
<li class="mulabnmn" onclick="book(event, 'mulabn_2_2_1')">  মূল-পঞ্চাশ </li>
<li class="mulabnmn" onclick="book(event, 'mulabn_2_2_2')">  মধ্যম-পঞ্চাশ </li>
<li class="mulabnmn" onclick="book(event, 'mulabn_2_2_3')">  উপরি-পঞ্চাশ </li>
<div class=" pitakaName2 mulabnsn_nikaya" onclick="booklabelopen2(event, 'mulabnsn')"> সংযুত্তনিকায় (মূল) </div>
<li class="mulabnsn" onclick="book(event, 'mulabn_2_3_1')">  সগাথা-বর্গ </li>
<li class="mulabnsn" onclick="book(event, 'mulabn_2_3_2')">  নিদান-বর্গ </li>
<li class="mulabnsn" onclick="book(event, 'mulabn_2_3_3')">  স্কন্ধ-বর্গ </li>
<li class="mulabnsn" onclick="book(event, 'mulabn_2_3_4')">  ষড়ায়তন-বর্গ </li>
<li class="mulabnsn" onclick="book(event, 'mulabn_2_3_5')">  মহাবর্গ </li>
<div class=" pitakaName2 mulabnan_nikaya" onclick="booklabelopen2(event, 'mulabnan')"> অঙ্গুত্তরনিকায় (মূল) </div>
<li class="mulabnan" onclick="book(event, 'mulabn_2_4_1')">  একক নিপাত </li>
<li class="mulabnan" onclick="book(event, 'mulabn_2_4_2')">  দ্বিক নিপাত </li>
<li class="mulabnan" onclick="book(event, 'mulabn_2_4_3')">  ত্রিক নিপাত </li>
<li class="mulabnan" onclick="book(event, 'mulabn_2_4_4')">  চতুস্ক নিপাত </li>
<li class="mulabnan" onclick="book(event, 'mulabn_2_4_5')">  পঞ্চক নিপাত </li>
<li class="mulabnan" onclick="book(event, 'mulabn_2_4_6')">  ষষ্ঠক নিপাত </li>
<li class="mulabnan" onclick="book(event, 'mulabn_2_4_7')">  সপ্তক নিপাত </li>
<li class="mulabnan" onclick="book(event, 'mulabn_2_4_8')">  অষ্টক নিপাত </li>
<li class="mulabnan" onclick="book(event, 'mulabn_2_4_9')">  নবক নিপাত </li>
<li class="mulabnan" onclick="book(event, 'mulabn_2_4_10')">  দশক নিপাত </li>
<li class="mulabnan" onclick="book(event, 'mulabn_2_4_11')">  একাদশক নিপাত </li>
<div class=" pitakaName2 mulabnkn_nikaya" onclick="booklabelopen2(event, 'mulabnkn')"> খুদ্দকনিকায় (মূল) </div>
<li class="mulabnkn" onclick="book(event, 'mulabn_2_5_1')">  খুদ্দকপাঠ </li>
<li class="mulabnkn" onclick="book(event, 'mulabn_2_5_2')">  ধর্মপদ </li>
<li class="mulabnkn" onclick="book(event, 'mulabn_2_5_3')">  উদান </li>
<li class="mulabnkn" onclick="book(event, 'mulabn_2_5_4')">  ইতিবুত্তক </li>
<li class="mulabnkn" onclick="book(event, 'mulabn_2_5_5')">  সূত্রনিপাত </li>
<li class="mulabnkn" onclick="book(event, 'mulabn_2_5_6')">  বিমানকাহিনি </li>
<li class="mulabnkn" onclick="book(event, 'mulabn_2_5_7')">  প্রেতকাহিনি </li>
<li class="mulabnkn" onclick="book(event, 'mulabn_2_5_8')">  থেরগাথা </li>
<li class="mulabnkn" onclick="book(event, 'mulabn_2_5_9')">  থেরীগাথা </li>
<li class="mulabnkn" onclick="book(event, 'mulabn_2_5_10')">  অপদান (১ম-২য় খণ্ড) </li>
<li class="mulabnkn" onclick="book(event, 'mulabn_2_5_11')">  বুদ্ধবংশ </li>
<li class="mulabnkn" onclick="book(event, 'mulabn_2_5_12')">  চরিয়াপিটক </li>
<li class="mulabnkn" onclick="book(event, 'mulabn_2_5_13')">  জাতক (১ম খণ্ড) </li>
<li class="mulabnkn" onclick="book(event, 'mulabn_2_5_14')">  জাতক (২য় খণ্ড) </li>
<li class="mulabnkn" onclick="book(event, 'mulabn_2_5_15')">  জাতক (৩য় খণ্ড) </li>
<li class="mulabnkn" onclick="book(event, 'mulabn_2_5_16')">  জাতক (৪থ খণ্ড) </li>
<li class="mulabnkn" onclick="book(event, 'mulabn_2_5_17')">  জাতক (৫ম খণ্ড) </li>
<li class="mulabnkn" onclick="book(event, 'mulabn_2_5_18')">  জাতক (৬ষ্ঠ খণ্ড) </li>
<li class="mulabnkn" onclick="book(event, 'mulabn_2_5_19')">  মহানির্দেশ </li>
<li class="mulabnkn" onclick="book(event, 'mulabn_2_5_20')">  চূলনির্দেশ </li>
<li class="mulabnkn" onclick="book(event, 'mulabn_2_5_21')">  প্রতিসম্ভিদামার্গ </li>
<li class="mulabnkn" onclick="book(event, 'mulabn_2_5_22')">  মিলিন্দ প্রশ্ন </li>
<li class="mulabnkn" onclick="book(event, 'mulabn_2_5_23')">  নেত্তিপ্রকরণ </li>
<li class="mulabnkn" onclick="book(event, 'mulabn_2_5_24')">  পিটকোপদেশ </li>
</div>
<div class=" pitakaName atthbn_nikaya" onclick="booklabelopen(event, 'atthasuttabn')"> সুত্র পিটক (অট্ঠকথা) </div>
<div class="atthasuttabn bookName_panel2">
<div class=" pitakaName2 atthbn_nikaya" onclick="booklabelopen2(event, 'atthbn')"> খুদ্দকনিকায (অট্ঠকথা) </div>
<li class="atthbn" onclick="book(event, 'atthbn_2_5_2')">  ধর্মপদ-অর্থকথা (সমগ্র) </li>
</div>
<div class=" pitakaName mulabnabhi_nikaya" onclick="booklabelopen(event, 'mulabnabhi')"> অভিধর্মপিটক (মূল) </div>
<li class="mulabnabhi" onclick="book(event, 'mulabn_3_1')">  ধর্মসঙ্গণী </li>
<li class="mulabnabhi" onclick="book(event, 'mulabn_3_2')">  বিভঙ্গ </li>
<li class="mulabnabhi" onclick="book(event, 'mulabn_3_3')">  ধাতুকথা </li>
<li class="mulabnabhi" onclick="book(event, 'mulabn_3_4')">  পুদ্গল প্রজ্ঞপ্তি </li>
<li class="mulabnabhi" onclick="book(event, 'mulabn_3_5')">  কথাবত্থু </li>
<li class="mulabnabhi" onclick="book(event, 'mulabn_3_6')">  যমক (১ম খণ্ড) </li>
<li class="mulabnabhi" onclick="book(event, 'mulabn_3_7')">  যমক (২য় খণ্ড) </li>
<li class="mulabnabhi" onclick="book(event, 'mulabn_3_8')">  যমক (৩য় খণ্ড) </li>
<li class="mulabnabhi" onclick="book(event, 'mulabn_3_9')">  পট্ঠান (১ম খণ্ড) </li>
<li class="mulabnabhi" onclick="book(event, 'mulabn_3_10')">  পট্ঠান (২য় খণ্ড) </li>
<li class="mulabnabhi" onclick="book(event, 'mulabn_3_11')">  পট্ঠান (৩য় খণ্ড) </li>
<li class="mulabnabhi" onclick="book(event, 'mulabn_3_12')">  পট্ঠান (৪র্থ খণ্ড) </li>
<li class="mulabnabhi" onclick="book(event, 'mulabn_3_13')">  পট্ঠান (৫ম খণ্ড) </li>
<div class=" pitakaName otherbn_nikaya" onclick="booklabelopen(event, 'otherbn')"> অন্যান্য </div>
<li class="otherbn" onclick="book(event, 'otherbn_1_1')">  আর্যশ্রাবক বনভন্তের ধর্মদেশনা (সিরিজ-১) </li>
<li class="otherbn" onclick="book(event, 'otherbn_1_2')">  আর্যশ্রাবক বনভন্তের ধর্মদেশনা (সিরিজ-২) </li>
<li class="otherbn" onclick="book(event, 'otherbn_1_3')">  আর্যশ্রাবক বনভন্তের ধর্মদেশনা (সিরিজ-৩) </li>
<li class="otherbn" onclick="book(event, 'otherbn_1_4')">  আর্যশ্রাবক বনভন্তের ধর্মদেশনা (সিরিজ-৪) </li>
<li class="otherbn" onclick="book(event, 'otherbn_1_5')">  আর্যশ্রাবক বনভন্তের ধর্মদেশনা (সিরিজ-৫) </li>
<li class="otherbn" onclick="book(event, 'otherbn_1_6')">  আর্যশ্রাবক বনভন্তের ধর্মদেশনা (সিরিজ-৬) </li>
<li class="otherbn" onclick="book(event, 'otherbn_1_7')">  আর্যশ্রাবক বনভন্তের ধর্মদেশনা (সিরিজ-৭) </li>
<li class="otherbn" onclick="book(event, 'otherbn_1_8')">  আর্যশ্রাবক বনভন্তের ধর্মদেশনা (সিরিজ-৮) </li>
<li class="otherbn" onclick="book(event, 'otherbn_1_9')">  আর্যশ্রাবক বনভন্তের ধর্মদেশনা (সিরিজ-৯) </li>
<li class="otherbn" onclick="book(event, 'otherbn_1_10')">  শ্রাবকবুদ্ধ বনভন্তে </li>
<li class="otherbn" onclick="book(event, 'otherbn_1_11')">  বিশুদ্ধিমার্গ </li>
<li class="otherbn" onclick="book(event, 'otherbn_1_12')">  বিমুক্তিমার্গ </li>
<li class="otherbn" onclick="book(event, 'otherbn_1_13')">  বৌদ্ধ ভিক্ষু বিধি (১ম খণ্ড)  </li>
<li class="otherbn" onclick="book(event, 'otherbn_1_14')">  বৌদ্ধ ভিক্ষু বিধি (২য় খণ্ড)  </li>
<li class="otherbn" onclick="book(event, 'otherbn_1_15')">  জানা ও দেখা </li>
<li class="otherbn" onclick="book(event, 'otherbn_1_16')">  হৃদয়ের দরজা খুলে দিন </li>
<li class="otherbn" onclick="book(event, 'otherbn_1_17')">  কেবল ভালো হোন </li>
<li class="otherbn" onclick="book(event, 'otherbn_1_18')">  একটি বন্য গাছ </li>
<li class="otherbn" onclick="book(event, 'otherbn_1_19')">  পট্ঠানুদ্দেশ-দীপনী </li>
<li class="otherbn" onclick="book(event, 'otherbn_1_20')">  ভালো? মন্দ? কে জানে? </li>
<li class="otherbn" onclick="book(event, 'otherbn_1_21')">  মৃত্যুতে পুনর্জন্ম </li>
<li class="otherbn" onclick="book(event, 'otherbn_1_22')">  কুশল প্রশ্নোত্তর </li>
<li class="otherbn" onclick="book(event, 'otherbn_1_23')">  মহামানব গৌতম বুদ্ধ </li>
<li class="otherbn" onclick="book(event, 'otherbn_1_24')">  পরিত্রাণ সূত্র পঞ্চাশক </li>
    <br><br><br><br><br><br><br><br>
</div>

<div class="bookName_panel" id="englishbooks">
<div class="pitakaName" onclick="booklabelopen(event, 'suttaen')">  Suttapitaka </div>
<div class="suttaen bookName_panel2">
<div class="pitakaName2" onclick="booklabelopen2(event, 'mulaendn')"> Dīghanikāya</div>
<li class="mulaendn" onclick="book(event, 'mulaen_2_1_1')"> Sīlakkhandha Vagga</li>
<li class="mulaendn" onclick="book(event, 'mulaen_2_1_2')"> Mahā Vagga</li>
<li class="mulaendn" onclick="book(event, 'mulaen_2_1_3')"> Pāthika Vagga</li>
<div class="pitakaName2" onclick="booklabelopen2(event, 'mulaenmn')"> Majjhimanikāya</div>
<li class="mulaenmn" onclick="book(event, 'mulaen_2_2_1')"> Mūlapaṇṇāsa</li>
<li class="mulaenmn" onclick="book(event, 'mulaen_2_2_2')"> Majjhimapaṇṇāsa</li>
<li class="mulaenmn" onclick="book(event, 'mulaen_2_2_3')"> Uparipaṇṇāsa</li>
<div class="pitakaName2" onclick="booklabelopen2(event, 'mulaensn')"> Saṃyuttanikāya</div>
<li class="mulaensn" onclick="book(event, 'mulaen_2_3_1')"> Sagāthā Vaggasaṃyutta</li>
<li class="mulaensn" onclick="book(event, 'mulaen_2_3_2')"> Nidāna Vaggasaṃyutta</li>
<li class="mulaensn" onclick="book(event, 'mulaen_2_3_3')"> Khandha Vaggasaṃyutta</li>
<li class="mulaensn" onclick="book(event, 'mulaen_2_3_4')"> Saḷāyatana Vaggasaṃyutta</li>
<li class="mulaensn" onclick="book(event, 'mulaen_2_3_5')"> Mahā Vaggasaṃyutta</li>
<div class="pitakaName2" onclick="booklabelopen2(event, 'mulaenan')"> Aṅguttaranikāya</div>
<li class="mulaenan" onclick="book(event, 'mulaen_2_4_1')"> 1. Ekakanipāta</li>
<li class="mulaenan" onclick="book(event, 'mulaen_2_4_2')"> 2. Dukanipāta</li>
<li class="mulaenan" onclick="book(event, 'mulaen_2_4_3')"> 3. Tikanipāta</li>
<li class="mulaenan" onclick="book(event, 'mulaen_2_4_4')"> 4. Catukkanipāta</li>
<li class="mulaenan" onclick="book(event, 'mulaen_2_4_4')"> 5. Pañcakanipāta</li>
<li class="mulaenan" onclick="book(event, 'mulaen_2_4_6')"> 6. Chakkanipāta</li>
<li class="mulaenan" onclick="book(event, 'mulaen_2_4_7')"> 7. Sattakanipāta</li>
<li class="mulaenan" onclick="book(event, 'mulaen_2_4_8')"> 8. Aṭṭhakanipāta</li>
<li class="mulaenan" onclick="book(event, 'mulaen_2_4_9')"> 9. Navakanipāta</li>
<li class="mulaenan" onclick="book(event, 'mulaen_2_4_10')"> 10. Dasakanipāta</li>
<li class="mulaenan" onclick="book(event, 'mulaen_2_4_11')"> 11. Ekādasakanipāta</li>
<div class="pitakaName2" onclick="booklabelopen2(event, 'mulaenkn')"> Khuddakanikāya</div>
<li class="mulaenkn" onclick="book(event, 'mulaen_2_5_1')"> Khuddakapāṭha</li>
<li class="mulaenkn" onclick="book(event, 'mulaen_2_5_2')"> Dhammapada</li>
<li class="mulaenkn" onclick="book(event, 'mulaen_2_5_3')"> Udāna</li>
<li class="mulaenkn" onclick="book(event, 'mulaen_2_5_4')"> Itivuttaka</li>
<li class="mulaenkn" onclick="book(event, 'mulaen_2_5_5')"> Suttanipāta</li>
<li class="mulaenkn" onclick="book(event, 'mulaen_2_5_6')"> Vimānavatthu</li>
<li class="mulaenkn" onclick="book(event, 'mulaen_2_5_7')"> petavatthu</li>
<li class="mulaenkn" onclick="book(event, 'mulaen_2_5_8')"> Theragāthā</li>
<li class="mulaenkn" onclick="book(event, 'mulaen_2_5_9')"> Therīgāthā</li>
<li class="mulaenkn" onclick="book(event, 'mulaen_2_5_10')"> Apadāna</li>
<li class="mulaenkn" onclick="book(event, 'mulaen_2_5_11')"> Buddhavaṃsa</li>
<li class="mulaenkn" onclick="book(event, 'mulaen_2_5_12')"> Cariyāpiṭaka</li>
<li class="mulaenkn" onclick="book(event, 'mulaen_2_5_13')"> Jātaka-1</li>
<li class="mulaenkn" onclick="book(event, 'mulaen_2_5_14')"> Jātaka-2</li>
<li class="mulaenkn" onclick="book(event, 'mulaen_2_5_15')"> Jātaka-3</li>
<li class="mulaenkn" onclick="book(event, 'mulaen_2_5_16')"> Jātaka-4</li>
<li class="mulaenkn" onclick="book(event, 'mulaen_2_5_17')"> Jātaka-5</li>
<li class="mulaenkn" onclick="book(event, 'mulaen_2_5_18')"> Jātaka-6</li>
<li class="mulaenkn" onclick="book(event, 'mulaen_2_5_19')"> Mahāniddesa</li>
<li class="mulaenkn" onclick="book(event, 'mulaen_2_5_20')"> Cūḷaniddesa</li>
<li class="mulaenkn" onclick="book(event, 'mulaen_2_5_21')"> paṭisambhidāmagga</li>
<li class="mulaenkn" onclick="book(event, 'mulaen_2_5_22')"> Netti</li>
<li class="mulaenkn" onclick="book(event, 'mulaen_2_5_23')"> Milindapañha</li>
<li class="mulaenkn" onclick="book(event, 'mulaen_2_5_24')"> peṭakopadesa</li>

<br><br><br><br><br><br><br><br>
</div>
</div>

<div class="select_language"
  id="selectLanguage">
  <div onclick="selectLangu(event, 'palibooks')"
    class="language languActive"
    id="pali">পালি</div>
  <div onclick="selectLangu(event, 'banglabooks')"
    class="language"
    id="bangla">বাংলা</div>
  <div onclick="selectLangu(event, 'englishbooks')"
    class="language"
    id="english">English</div>
</div>


</div> <!-- sidebar end -->
`
document.getElementById('sd').innerHTML = booklist