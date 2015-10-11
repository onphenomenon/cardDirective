describe('card', function() {
  it('adds the class on click when it did not previously have the class', function() {
    browser.get('');
    var el = element(By.tagName('card'));
    el.click()
    expect(el.getAttribute('class')).toBe('highlight');
  });
  it('removes the class on click when it previously had the class', function() {
    browser.get('');
    var el = element(By.css('div'));

    // first add the class by performing a click
    el.click()
    expect(el.getAttribute('class')).toBe('highlight');

    // now click again and confirm the class has been removed
    el.click()
    expect(el.getAttribute('class')).toBe('');
  });
});
