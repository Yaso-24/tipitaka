var book = {
	pali: {
	    title: {
            src: "pali",
            name: "পালি"
        },
		mula: {
		    title: 'mula',
			sutta: {
			    title: 'sutta',
			    dn: ['dn1', 'dn2', 'dn3'],
			    mn: [''],
			    an: [],
			    sn: [],
			    kn: []
			},
			vinaya: {
			    title: 'vinaya',
			    pa: [],
			    pc: [],
			    mv: [],
			    cv: [],
			    pv: []
			    
			},
			abhi: {
			    title: 'Abhidhamma',
			    ds: [],
			    vb: [],
			    dt: [],
			    pp: [],
			    kv: [],
			    ym: [],
			    pt: []
			}
		},
		atth: {
		    title: 'Atthakata',
			sutta: {
			    dn: ['dn1', 'dn2', 'dn3'],
			    mn: [],
			    an: [],
			    sn: [],
			    kn: []
			},
			vinaya: {
			    pa: [],
			    pc: [],
			    mv: [],
			    cv: [],
			    pv: []
			    
			},
			abhi: {
			    ds: [],
			    vb: [],
			    dt: [],
			    pp: [],
			    kv: [],
			    ym: [],
			    pt: []
			}
		},
		thika: {
		    title: 'Thikā',
			sutta: {
			    dn: ['dn1', 'dn2', 'dn3'],
			    mn: [],
			    an: [],
			    sn: [],
			    kn: []
			},
			vinaya: {
			    pa: [],
			    pc: [],
			    mv: [],
			    cv: [],
			    pv: []
			    
			},
			abhi: {
			    ds: [],
			    vb: [],
			    dt: [],
			    pp: [],
			    kv: [],
			    ym: [],
			    pt: []
			},
			vinaya: 2,
			abhi: 3
		},
		other: {
			sutta: 1,
			vinaya: 2,
			abhi: 3
		},
	},
	bangla: {
		
	},
	english: {
		
	}
	
}


console.log(book.pali.mula.sutta.dn[1] + book.pali.mula.title)
console.log(book.pali.atth.sutta.dn[0] + book.pali.atth.title)
console.log(book.pali.thika.sutta.dn[1] + book.pali.thika.title)