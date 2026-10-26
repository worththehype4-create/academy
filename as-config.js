// Settings for the After-sales course page (aftersales.html). Loaded after the as-*.js data files and before app.js.
(function(){
  const info = (window.COURSES||[]).find(c=>c.id==='aftersales');
  window.M = window.COURSE_DATA.aftersales.M;
  window.M.forEach(m=>{ m.quiz = (m.qz||[]).map(([k,q,o,why])=>({k, q, o, a:0, why})); });
  window.SKILLS = info.skills;
  window.FINAL_EXTRA = [];
  window.COURSE = {
    key:'aftersales', store:'bc-academy-aftersales', perSkill:6, pass:info.pass,
    groupColor:{'الأساس':'--accent','الطلب والجدولة':'--good','التنفيذ والمتابعة':'--warm','الضمان والقطع':'--gold','الفلوس والعميل':'--accent','القواعد':'--warm'},
    levels:[[0,'مبتدئ'],[400,'موظف خدمة'],[900,'متابع محترف'],[1500,'أخصائي خدمة'],[2100,'خبير خدمة عملاء']],
    eyebrow:'أكاديمية برازر كوند · كورس خدمة ما بعد البيع',
    heroText:(n,h)=>`نظام شغل برازر كوند من أول مكالمة لحد ما العميل يقيّمنا: ${Number(n).toLocaleString('ar-EG')} موديول، حوالي ${Number(h).toLocaleString('ar-EG')} ساعة، واختبار نهائي بشهادة «أخصائي خدمة ما بعد البيع معتمد» من برازر كوند.`,
    facts:`<div><b>العميل دايماً على حق</b><span>ويترد عليه بأسرع وقت</span></div>
      <div><b>كل طلب دايرة مقفولة</b><span>محدش يتنسي</span></div>
      <div><b>من ١٩٩٠</b><span>خبرة برازر كوند</span></div>
      <div><b>الموزع العام المعتمد</b><span>لتكييفات تراين المنزلية</span></div>`,
    flow:'كل موديول: دروس ← اعمل ومتعملش ← موقف عملي ← اختبار',
    finalCardSub:N=>`${Number(N).toLocaleString('ar-EG')} سؤال من ٦ مهارات، وتقرير بمستواك`,
    tabs:[['lesson','الدروس'],['say','اعمل ومتعملش'],['scen','موقف عملي'],['quiz','الاختبار']],
    sayIntro:'قواعد من الشغل اليومي. افهم الفرق بين الصح والغلط وليه.', sayYes:'اعمل', sayNo:'متعملش', sayNext:'كمّل: الموقف العملي',
    scenPick:'اختار أحسن تصرف في كل خطوة.', who:'الموقف', scenOk:'تصرف صح', scenNo:'مش أحسن تصرف',
    finalIntro:(N,P)=>`${Number(N).toLocaleString('ar-EG')} سؤال من ٦ مهارات. النجاح ${Number(P).toLocaleString('ar-EG')}٪ وبيدّيك شارة «أخصائي خدمة ما بعد البيع معتمد» وشهادة برازر كوند.`,
    finalMinutes:'٤٠', finalBadge:'أخصائي خدمة ما بعد البيع معتمد',
    verdicts:info.verdicts, verdictShort:['جاهز للشغل','كويس ومحتاج متابعة','محتاج تدريب تاني'],
    achIntro:'كل درس بـ ١٠ نقط، وكل اختيار صح في الموقف العملي بـ ٢٠ نقطة، وكل اختبار تعدّيه بياخد نتيجته + ٥٠ نقطة وشارة. الاختبار النهائي بيدّي شارة «أخصائي خدمة ما بعد البيع معتمد» والشهادة.',
    certAcademy:'تشهد أكاديمية برازر كوند بأن',
    certProgram:'قد أتمّ بنجاح برنامج «أخصائي خدمة ما بعد البيع معتمد»',
    certSigs:['مدير خدمة العملاء','مدير التدريب'], certFile:'BrotherCond-AfterSales-Certificate-'
  };
})();
