/**
 * Created by JimBarrows on 7/20/21.
 */

export function convert_to_table_name (type) {
	return type.replace(/\s+/g, '_').toLowerCase()
}
