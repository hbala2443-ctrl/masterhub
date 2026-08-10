function searchExam(){

    const input = document.getElementById("searchInput");

    const searchText = input.value.trim().toLowerCase();

    if(searchText === ""){

        alert("कृपया Exam या Subject का नाम लिखें।");

        return;
    }

    const exams = {
        "cet": "exams.html",
        "reet": "exams.html",
        "police": "exams.html",
        "patwari": "exams.html",
        "history": "exams.html",
        "राजस्थान इतिहास": "exams.html",
        "math": "exams.html",
        "गणित": "exams.html",
        "reasoning": "exams.html",
        "रीजनिंग": "exams.html"
    };

    if(exams[searchText]){

        window.location.href = exams[searchText];

    }else{

        alert(
            "अभी इस विषय का पेज तैयार नहीं है।\n\n" +
            "हम इसे जल्द MasterHub में जोड़ेंगे।"
        );

    }

}
