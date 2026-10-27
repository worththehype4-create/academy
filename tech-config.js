// Settings for the Technical course page (tech.html). Loaded after the tech-*.js data files and before app.js.
(function(){
  const info = (window.COURSES||[]).find(c=>c.id==='tech');
  window.M = window.COURSE_DATA.tech.M;
  window.M.forEach(m=>{ m.quiz = (m.qz||[]).map(([k,q,o,why])=>({k, q, o, a:0, why})); });
  window.SKILLS = info.skills;
  window.FINAL_EXTRA = [];
  window.COURSE = {
    key:'tech', store:'bc-academy-tech', perSkill:6, pass:info.pass,
    groupColor:{'الأساس العلمي':'--accent','العدة والقياس':'--good','التركيب الاحترافي':'--warm','المكونات والكهرباء':'--gold','الأعطال والصيانة':'--accent'},
    levels:[[0,'مبتدئ'],[600,'مساعد فني'],[1500,'فني'],[2600,'فني أول'],[3600,'فني خبير']],
    eyebrow:'أكاديمية برازر كوند · الكورس الفني',
    heroText:(n,h)=>`برنامج فني كامل من الصفر للاحتراف: ${Number(n).toLocaleString('ar-EG')} موديول، حوالي ${Number(h).toLocaleString('ar-EG')} ساعة، من دورة التبريد لحد التشخيص بالأرقام، واختبار نهائي بشهادة «فني تكييف معتمد» من برازر كوند.`,
    facts:`<div><b>القياس مش التخمين</b><span>كل قرار فني بالأرقام</span></div>
      <div><b>من ١٩٩٠</b><span>خبرة برازر كوند في التركيب والصيانة</span></div>
      <div><b>قطع غيار أصلية</b><span>لكل الماركات</span></div>
      <div><b>الموزع العام المعتمد</b><span>لتكييفات ترين المنزلية</span></div>`,
    flow:'كل موديول: دروس ← اعمل ومتعملش ← حالة عملية ← اختبار',
    finalCardSub:N=>`${Number(N).toLocaleString('ar-EG')} سؤال فني من ٧ مهارات، وتقرير بمستواك`,
    tabs:[['lesson','الدروس'],['say','اعمل ومتعملش'],['scen','حالة عملية'],['quiz','الاختبار']],
    sayIntro:'قواعد من الشغل الحقيقي. افهم الفرق بين الصح والغلط وليه.', sayYes:'اعمل', sayNo:'متعملش', sayNext:'كمّل: الحالة العملية',
    scenPick:'اختار أحسن تصرف في كل خطوة.', who:'الموقف', scenOk:'تصرف صح', scenNo:'مش أحسن تصرف',
    finalIntro:(N,P)=>`${Number(N).toLocaleString('ar-EG')} سؤال فني من ٧ مهارات. النجاح ${Number(P).toLocaleString('ar-EG')}٪ وبيدّيك شارة «فني تكييف معتمد» وشهادة برازر كوند.`,
    finalMinutes:'٥٠', finalBadge:'فني تكييف معتمد',
    verdicts:info.verdicts, verdictShort:['جاهز للشغل','كويس ومحتاج متابعة','محتاج تدريب تاني'],
    achIntro:'كل درس بـ ١٠ نقط، وكل اختيار صح في الحالة العملية بـ ٢٠ نقطة، وكل اختبار تعدّيه بياخد نتيجته + ٥٠ نقطة وشارة. الاختبار النهائي بيدّي شارة «فني تكييف معتمد» والشهادة.',
    certAcademy:'تشهد أكاديمية برازر كوند بأن',
    certProgram:'قد أتمّ بنجاح البرنامج التدريبي الفني «فني تكييف معتمد»',
    certSigs:['مدير القسم الفني','مدير التدريب'], certFile:'BrotherCond-Technical-Certificate-'
  };
})();
