// BrotherCond Academy: list of courses. Add a new course here, plus its page and data files.
window.COURSES = [
  {id:'sales', title:'كورس المبيعات', sub:'مندوب مبيعات التكييف المعتمد', page:'index.html'},
  {id:'tech', title:'الكورس الفني', sub:'فني تكييف معتمد: من دورة التبريد للتشخيص بالأرقام', page:'tech.html',
   files:['tech-a.js','tech-b.js','tech-c.js','tech-d.js','tech-e.js','tech-quiz.js'],
   skills:{B:'العلوم والدورة', G:'الفريون والزيوت', M:'القياس وفحص الشحنة', I:'التركيب والتفريغ والشحن', E:'الكهرباء والإنفرتر', D:'التشخيص والهوا', S:'السلامة والصيانة'},
   pass:80, verdicts:['فني جاهز للشغل','فني كويس ومحتاج متابعة','محتاج تدريب تاني قبل الشغل لوحده']},
  {id:'aftersales', title:'كورس خدمة ما بعد البيع', sub:'قريباً', soon:true}
];
