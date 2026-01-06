import { htmlRegex } from './html-regex.data';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'richText',
})
export class RichTextPipe implements PipeTransform {
  transform(value: string): string {
    const html = this.purseNonEmptyHtml(value);
    const isValidHtml = htmlRegex.test(html);
    return isValidHtml ? html : '';
  }

  private purseNonEmptyHtml(html: string) {
    const htmlTags: RegExp = /<[^]*?>/g;
    const hasContent = html.replace(htmlTags, '').trim().length > 0;

    return hasContent ? html : '';
  }
}
