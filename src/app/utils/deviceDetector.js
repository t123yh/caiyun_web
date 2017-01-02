import $ from 'jquery';

export default function () {
  const envs = ['xs', 'sm', 'md', 'lg'];

  const $el = $('<div>');
  $el.appendTo($('body'));

  for (let i = envs.length - 1; i >= 0; i -= 1) {
    const env = envs[i];

    $el.addClass(`hidden-${env}`);
    if ($el.is(':hidden')) {
      $el.remove();
      return env;
    }
  }
  return '';
}
