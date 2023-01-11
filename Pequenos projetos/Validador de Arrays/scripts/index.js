function calculate () {
    // importing elements
    let res = document.querySelector('div.result')
    let txtFollow = document.getElementById('textArea1').value
    
    let txtFollowFormat = txtFollow.replace(/@/g, " ', '@ ");
    let txtFollowFinalFormat = txtFollowFormat.slice(3)
    let teste = []
    teste.push('@ zakk616 Muhammad Zakaria zakk616 Full-Stack Software Developer | Dotnet, Flask, Django, Nodejs | Machine Learning BMC Solution Karachi, Pakistan. ', '@ lucky7123 lucky7123 🥇 Role: Full-Stack Development fishingamateur71 ', '@ gmail.com EU ', '@ jlianacastillo Juliana Castillo jlianacastillo Co-Founder Network WE (Women Engineering) | Speaker in PionerasDev 🇨🇴 Technolatinas 🇲🇽 MacaoTech 🇭🇳 | Author v.4 "MATILDA Y LAS MUJERES EN INGENIERÍA')
    
    res.innerHTML = `${teste[2]} `
}