// 점검 사항 - 부적합 선택 시 내용 보이기
const radios = document.querySelectorAll('input[name="checkStatus"]');
const extraFields = document.getElementById('extraFields');

radios.forEach(radio => {
  radio.addEventListener('change', () => {
    extraFields.classList.toggle('hidden', radio.value !== '부적합');
  });
});

// 공통 fetch 함수
async function postToScript(url, payload) {
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
    if (response.ok) {
      alert('저장 완료!');
    } else {
      alert('저장 실패: ' + response.statusText);
    }
  } catch (e) {
    alert('에러: ' + e.message);
  }
}

// ✅ 점검 사항 저장
document.getElementById('inspectionForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const payload = {
    planterId: document.getElementById('planterId').value,
    worker: document.getElementById('worker').value,
    checkStatus: document.querySelector('input[name="checkStatus"]:checked').value,
    detail: document.getElementById('detail').value,
    photoUrl: document.getElementById('photoUrl').value,
    date: new Date().toLocaleString('sv-SE')
  };

  postToScript('YOUR_SCRIPT_URL_INSPECTION', payload);
  this.reset();
  extraFields.classList.add('hidden');
});

// ✅ 병충해 방제 이력
document.getElementById('diseaseForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const payload = {
    drugName: document.getElementById('drugName').value,
    drugText: document.getElementById('drugText').value,
    photoUrl: document.getElementById('drugPhotoUrl').value,
    date: new Date().toLocaleString('sv-SE')
  };

  postToScript('YOUR_SCRIPT_URL_DISEASE', payload);
  this.reset();
});

// ✅ 교체 이력
document.getElementById('replaceForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const payload = {
    replaceText: document.getElementById('replaceText').value,
    photoUrl: document.getElementById('replacePhotoUrl').value,
    date: new Date().toLocaleString('sv-SE')
  };

  postToScript('YOUR_SCRIPT_URL_REPLACE', payload);
  this.reset();
});

// ✅ 특이사항
document.getElementById('noteForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const payload = {
    noteText: document.getElementById('noteText').value,
    photoUrl: document.getElementById('notePhotoUrl').value,
    date: new Date().toLocaleString('sv-SE')
  };

  postToScript('YOUR_SCRIPT_URL_NOTE', payload);
  this.reset();
});
