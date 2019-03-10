var SELECTORS = {
  section: '[data-section]',
  scrollTo: '[data-scroll-to]',
  scrollDir: '[data-scroll-dir]'
};

var sectionsArray = Array.from(document.querySelectorAll(SELECTORS.section));
var scrollToElements = document.querySelectorAll(SELECTORS.scrollTo);
var scrollDirElements = document.querySelectorAll(SELECTORS.scrollDir);

var currentSectionIndex = 0;

var getScrollTarget = function getScrollTarget(dir) {
  if (dir === 'prev' && currentSectionIndex > 0) {
    currentSectionIndex--;
    return sectionsArray[currentSectionIndex];
  }
  if (dir === 'next' && currentSectionIndex < sectionsArray.length - 1) {
    currentSectionIndex++;
    return sectionsArray[currentSectionIndex];
  }
  return false;
};

scrollDirElements.forEach(function(el) {
  el.addEventListener('click', function() {
    var direction = el.dataset.scrollDir;
    var target = getScrollTarget(direction);

    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

scrollToElements.forEach(function(el) {
  el.addEventListener('click', function(e) {
    e.preventDefault();
    var targetId = el.getAttribute('href');
    var target = document.querySelector(targetId);

    if (target) {
      sectionsArray.forEach(function(section, index) {
        if (section.id === targetId.replace('#', '')) {
          currentSectionIndex = index;
        }
      });
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});
