/* eslint-disable */
import { mockMethods } from 'aspida-mock'
import * as Types from '../../../@types'

export type Methods = {
  get: {
    query: {
      company_id: number
    }

    resBody: Types.quotationResponse
  }

  put: {
    resBody: Types.quotationResponse
    reqFormat: URLSearchParams
    reqBody?: Types.quotationUpdateParams
  }

  delete: {
    query: {
      company_id: number
    }
  }
}

export default mockMethods<Methods>({
  get: () => ({ status: 200, resBody: { quotation: { id: 1, company_id: 1, issue_date: 'a', partner_id: 1, partner_code: 'a', quotation_number: 'a', title: 'a', total_amount: 1, total_vat: 1, sub_total: 1, description: 'a', quotation_status: 'unsubmitted', web_published_at: 'a', web_downloaded_at: 'a', web_confirmed_at: 'a', mail_sent_at: 'a', partner_name: 'a', partner_display_name: 'a', partner_title: '御中', partner_zipcode: 'a', partner_prefecture_code: 1, partner_prefecture_name: 'a', partner_address1: 'a', partner_address2: 'a', partner_contact_info: 'a', company_name: 'a', company_zipcode: 'a', company_prefecture_code: 1, company_prefecture_name: 'a', company_address1: 'a', company_address2: 'a', company_contact_info: 'a', message: 'a', notes: 'a', quotation_layout: 'default_classic', tax_entry_method: '', quotation_contents: [{ id: 1, order: 1, type: 'normal', qty: 1, unit: 'a', unit_price: 1, amount: 1, vat: 1, reduced_vat: true, description: 'a', account_item_id: 1, account_item_name: 'a', tax_code: 1, item_id: 1, item_name: 'a', section_id: 1, section_name: 'a', tag_ids: [1], tag_names: ['a'], segment_1_tag_id: 1, segment_1_tag_name: 'a', segment_2_tag_id: 1, segment_2_tag_name: 'a', segment_3_tag_id: 1, segment_3_tag_name: 'a' }], total_amount_per_vat_rate: { vat_5: 1, vat_8: 1, reduced_vat_8: 1, vat_10: 1 } } } }),
  put: () => ({ status: 200, resBody: { quotation: { id: 1, company_id: 1, issue_date: 'a', partner_id: 1, partner_code: 'a', quotation_number: 'a', title: 'a', total_amount: 1, total_vat: 1, sub_total: 1, description: 'a', quotation_status: 'unsubmitted', web_published_at: 'a', web_downloaded_at: 'a', web_confirmed_at: 'a', mail_sent_at: 'a', partner_name: 'a', partner_display_name: 'a', partner_title: '御中', partner_zipcode: 'a', partner_prefecture_code: 1, partner_prefecture_name: 'a', partner_address1: 'a', partner_address2: 'a', partner_contact_info: 'a', company_name: 'a', company_zipcode: 'a', company_prefecture_code: 1, company_prefecture_name: 'a', company_address1: 'a', company_address2: 'a', company_contact_info: 'a', message: 'a', notes: 'a', quotation_layout: 'default_classic', tax_entry_method: '', quotation_contents: [{ id: 1, order: 1, type: 'normal', qty: 1, unit: 'a', unit_price: 1, amount: 1, vat: 1, reduced_vat: true, description: 'a', account_item_id: 1, account_item_name: 'a', tax_code: 1, item_id: 1, item_name: 'a', section_id: 1, section_name: 'a', tag_ids: [1], tag_names: ['a'], segment_1_tag_id: 1, segment_1_tag_name: 'a', segment_2_tag_id: 1, segment_2_tag_name: 'a', segment_3_tag_id: 1, segment_3_tag_name: 'a' }], total_amount_per_vat_rate: { vat_5: 1, vat_8: 1, reduced_vat_8: 1, vat_10: 1 } } } }),
  delete: () => ({ status: 200 })
})