var API_RES = [
    {
      id: 'a84f6978-64fa-4aa1-862c-bdc0cba3c656',
      content: 'is a string of text content',
      createdDate: '2012-10-05T14:48:00.000Z',
      modifiedDate: '2012-10-05T14:48:00.000Z',
      tags: 'comma separated list of strings representing tags',
      title: 'is a string of text content',
      type: 'is a string representing an item type',
      dueDate:
        'a date represented by an ISO string, e.g. 2011-10-05T14:48:00.000Z'
    },
    {
      id: '64fa-4aa1-862c-bdc0cba3c656-08f655bd8361',
      content: 'I am very happy',
      createdDate: '2011-10-05T14:48:00.000Z',
      modifiedDate: '2011-10-05T14:48:00.000Z',
      tags: 'comma separated list of strings representing tags',
      title: 'is a string of text content',
      type: 'is a string representing an item type',
      dueDate:
        'a date represented by an ISO string, e.g. 2011-10-05T14:48:00.000Z'
    }
  ];
  
  document.getElementById('run1').addEventListener('click', searchKeyword);
  document.getElementById('run2').addEventListener('click', order);
  document.getElementById('run3').addEventListener('click', updateData);
  
  function searchKeyword() {
    var keyword = document.getElementById('serachString').value.trim();
    var NEW_RES = [];
    API_RES.forEach(item => {
      if (item.content.includes(keyword)) {
        NEW_RES.push(item);
      }
    });
    console.log(NEW_RES);
  }
  
  function order() {
    var p1 = document.getElementById('p1').value;
    var p2 = document.getElementById('p2').value;
    var TEMP_API_RES = [...API_RES];
    if (p1 === '1' && p2 === '1') {
      TEMP_API_RES.sort(function(a, b) {
        return new Date(a.createdDate) - new Date(b.createdDate);
      });
    } else if (p1 === '1' && p2 === '2') {
      TEMP_API_RES.sort(function(a, b) {
        return new Date(b.createdDate) - new Date(a.createdDate);
      });
    } else if (p1 === '2' && p2 === '1') {
      TEMP_API_RES.sort(function(a, b) {
        return new Date(a.modifiedDate) - new Date(b.modifiedDate);
      });
    } else if (p1 === '2' && p2 === '2') {
      TEMP_API_RES.sort(function(a, b) {
        return new Date(b.modifiedDate) - new Date(a.modifiedDate);
      });
    }
    console.log(TEMP_API_RES);
  }
  
  function updateData() {
    id = document.getElementById('id').value.trim();
    newContent = document.getElementById('newContent').value;
    var TEMP_API_RES = [...API_RES];
    TEMP_API_RES.forEach(item => {
      if (id === item.id) {
        item.content = newContent;
      }
    });
    console.log(TEMP_API_RES);
  }
  