type TimelineFiltersProps = {
  country: string
  setCountry: (value: string) => void
  focus: string
  setFocus: (value: string) => void
}

const TimelineFilters = ({
  country,
  setCountry,
  focus,
  setFocus,
}: TimelineFiltersProps) => {
  return (
    <section style={styles.wrapper}>
      <div style={styles.container}>
        {/* IZQUIERDA */}
        <div>
          <span style={styles.label}>FILTRAR LÍNEA DE TIEMPO</span>

          <div style={styles.group}>
            <span style={styles.groupTitle}>País</span>
            <div style={styles.buttons}>
              <FilterButton
                label="Ambos países"
                active={country === 'all'}
                onClick={() => setCountry('all')}
              />
              <FilterButton
                label="EC Ecuador"
                active={country === 'ec'}
                onClick={() => setCountry('ec')}
              />
              <FilterButton
                label="DK Dinamarca"
                active={country === 'dk'}
                onClick={() => setCountry('dk')}
              />
            </div>
          </div>
        </div>

        {/* DERECHA */}
        <div>
          <span style={styles.groupTitle}>Enfoque</span>
          <div style={styles.buttons}>
            <FilterButton
              label="Todos los enfoques"
              active={focus === 'all'}
              onClick={() => setFocus('all')}
            />
            <FilterButton
              label="Legal"
              active={focus === 'legal'}
              onClick={() => setFocus('legal')}
            />
            <FilterButton
              label="Tecnológico"
              active={focus === 'tech'}
              onClick={() => setFocus('tech')}
            />
            <FilterButton
              label="Institucional"
              active={focus === 'inst'}
              onClick={() => setFocus('inst')}
            />
          </div>
        </div>
      </div>

      {/* FILTROS ACTIVOS */}
      <div style={styles.activeFilters}>
        {country !== 'all' && (
          <span style={styles.activeTag}>
            {country === 'ec' ? 'EC Ecuador' : 'DK Dinamarca'} ✕
          </span>
        )}
        {focus !== 'all' && (
          <span style={styles.activeTag}>
            {focus === 'legal'
              ? 'Legal'
              : focus === 'tech'
              ? 'Tecnológico'
              : 'Institucional'}{' '}
            ✕
          </span>
        )}
      </div>
    </section>
  )
}

const FilterButton = ({
  label,
  active,
  onClick,
}: {
  label: string
  active: boolean
  onClick: () => void
}) => {
  return (
    <button
      onClick={onClick}
      style={{
        ...styles.button,
        background: active ? '#2563eb' : 'rgba(255,255,255,0.06)',
        color: active ? 'white' : '#d1d5db',
      }}
    >
      {label}
    </button>
  )
}

const styles = {
  wrapper: {
  position: 'sticky' as const,
  top: 0,
  zIndex: 50,
  padding: '24px 60px',
  background: 'linear-gradient(180deg, #0b1220 70%, rgba(11,18,32,0.85))',
  backdropFilter: 'blur(10px)',
  borderBottom: '1px solid rgba(255,255,255,0.06)',
},

  container: {
    display: 'flex',
    justifyContent: 'space-between',
    gap: '40px',
    flexWrap: 'wrap' as const,
    maxWidth: '1300px',
    margin: '0 auto',
  },
  label: {
    fontSize: '12px',
    letterSpacing: '0.12em',
    color: '#9ca3af',
    display: 'block',
    marginBottom: '14px',
  },
  group: {
    marginBottom: '28px',
  },
  groupTitle: {
    fontSize: '14px',
    color: '#9ca3af',
    marginBottom: '10px',
    display: 'block',
  },
  buttons: {
    display: 'flex',
    gap: '10px',
    flexWrap: 'wrap' as const,
  },
  button: {
    padding: '10px 16px',
    borderRadius: '999px',
    border: 'none',
    fontSize: '14px',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
  },
  activeFilters: {
    maxWidth: '1300px',
    margin: '20px auto 0',
    display: 'flex',
    gap: '10px',
    flexWrap: 'wrap' as const,
  },
  activeTag: {
    padding: '6px 14px',
    borderRadius: '999px',
    background: '#1f2937',
    fontSize: '13px',
    color: '#e5e7eb',
  },
}

export default TimelineFilters
