import React from 'react'
import propTypes from 'prop-types'

export default function EnchancedCheckbox ({ label, value, selected, id, onChange }) {
    const selectedClass = (
        selected
        ? ' enhached-checbox-container-selected'
        : ''
    )
const className = `enhanched-checkbox-container${selectedClass}`
    return (
        <div className={className} onClick={() => onChange()}>
            <input 
                type='checkbox'
                value={value}
                id={id}
                checked={selected}
                onChange={() => onChange()}
            />
            <label htmlFor={id}>{label}</label>
        </div>
    )
}

EnchancedCheckbox.propTypes = {
    label: propTypes.string.isRequired,
    value: propTypes.any.isRequired,
    selected: propTypes.bool.isRequired,
    id: propTypes.string.isRequired,
    onChange: propTypes.func.isRequired,
}