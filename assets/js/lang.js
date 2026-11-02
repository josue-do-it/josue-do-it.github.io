/**
 * lang.js — EN/FR content switcher
 * Reads data-en / data-fr attributes on elements that carry [data-i18n].
 * Stores preference in localStorage under key 'site-lang'. Default: 'en'.
 */
(function () {
  'use strict';

  var STORAGE_KEY = 'site-lang';
  var DEFAULT_LANG = 'en';

  function getCurrentLang() {
    try {
      return localStorage.getItem(STORAGE_KEY) || DEFAULT_LANG;
    } catch (_) {
      return DEFAULT_LANG;
    }
  }

  function setLang(lang) {
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch (_) {}
    applyLang(lang);
    updateToggleLabel(lang);
  }

  function applyLang(lang) {
    var elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(function (el) {
      var text = el.getAttribute('data-' + lang);
      if (text !== null) {
        // Support elements whose content is just text
        if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
          el.placeholder = text;
        } else {
          el.innerHTML = text;
        }
      }
    });
    // Mark the html element so CSS can react if needed
    document.documentElement.setAttribute('data-lang', lang);
  }

  function updateToggleLabel(lang) {
    var label = document.getElementById('lang-label');
    if (label) {
      // Show the OTHER language (what you'll switch TO)
      label.textContent = lang === 'en' ? 'FR' : 'EN';
    }
  }

  function toggleLang() {
    var current = getCurrentLang();
    setLang(current === 'en' ? 'fr' : 'en');
  }

  function init() {
    var btn = document.getElementById('lang-toggle');
    if (btn) {
      btn.addEventListener('click', toggleLang);
    }
    var lang = getCurrentLang();
    applyLang(lang);
    updateToggleLabel(lang);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();

