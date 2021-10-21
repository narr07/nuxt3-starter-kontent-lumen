import { IContentItem, Elements } from '@kentico/kontent-delivery';

/**
 * Generated by '@kentico/kontent-model-generator@3.3.0-0'
 */
export type Page = IContentItem<{
  description: Elements.RichTextElement;
  meta_description: Elements.TextElement;
  title: Elements.TextElement;
  gatsby_template: Elements.MultipleChoiceElement;
}>;

export const Page_CODENAME: string = "page"